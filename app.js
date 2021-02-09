const express = require('express')

const app = express()

app.use((req, res, next) => {
  res.send()
  next()
})

app.listen(3000)