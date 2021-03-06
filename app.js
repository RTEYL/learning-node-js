const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const path = require('path')
// const expressHbs = require('express-handlebars')

const app = express()



// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}))

// app.set('view engine', 'pug')
// app.set('view engine', 'hbs')
app.set('view engine', 'ejs')

//default setting

  // app.set('views', 'views')

//
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)

app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000)