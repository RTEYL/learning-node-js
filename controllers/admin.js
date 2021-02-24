const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    path: '/admin/add-product',
    pageTitle: 'Add Product',
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  })
}

exports.postAddProduct = (req, res, next) => {
  const data = req.body
  const product = new Product(data)
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      path: '/admin/products',
      pageTitle: 'Admin Products',
    })
  })
}