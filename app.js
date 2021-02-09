const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  console.log('always runs');
  next()
})

app.use('/add-product', (req, res, next) => {
  res.send('Add Product')
})

app.use('/', (req, res, next) => {
  res.send('Home Page')
})

app.listen(3000)