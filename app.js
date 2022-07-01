
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require('mongoose'); //veritabanı bağlantısı için
const bodyParser = require('body-parser') // post yapıldığında servera giden bilgileri yakalamak için kullanılır
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const methodOverride = require('method-override') //post methoduyla delete yapabilmek için

mongoose.connect('mongodb://127.0.0.1/my_database'); //my_database e bağlanacak yoksa oluşturacak

app.use(expressSession({
  secret: 'mengucek',
  resave: false,
  saveUninitialized: true,
  store: connectMongo.create({ mongoUrl: 'mongodb://127.0.0.1/my_database' })

}))
//Display Link Middlewares
app.use((req, res, next) => {
  const { userId } = req.session
  if (userId) {
    res.locals = {
      displayLink: true
    }
  }
  else {
    res.locals = {
      displayLink: false
    }
  }
  next()
})
//Flash -Message Middlewares
app.use((req, res, next) => {
  res.locals.sessionFlash = req.session.sessionFlash; //req session icerisinde herhangi bir mesaj varsa res sessiona gönder
  delete req.session.sessionFlash;
  next();
})

app.use(express.static("public")); //Middleware

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.engine("handlebars", exphbs.engine()); // default olarak layout klasörüne girip main.handlebars ı çalıştırıyor
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const main = require('./routes/main');
const users = require('./routes/users');
const contactInfos = require('./routes/contactInfos');
const admin = require('./routes/admin/index');

app.use("/", main);
app.use("/users", users);
app.use("/contactInfos", contactInfos);
app.use("/admin", admin);



app.listen(port, hostname, () => {
  console.log(`Server Çalışıyor , http://${hostname}:${port}/ `);
})
