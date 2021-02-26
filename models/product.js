const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, data)  => {
      if(!err){
        cb(JSON.parse(data))
      }else{
        cb([])
      }
    })
}

module.exports = class Product {
  constructor(title, imageUrl, description, price){
    this.title = title,
    this.imageUrl = imageUrl,
    this.description = description,
    this.price = price
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) =>{
        err ? console.log(err) : false
      })
    })
  }

  static fetchAll(cb){
    getProductsFromFile(cb)
  }

  static findById(id, cb) {
    getProductsFromFile((products => {
      const product = products.find(p => p.id === id)
      cb(product)
    }))
  }
}