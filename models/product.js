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
  constructor(title){
    this.title = title
  }

  save() {
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
}