const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var createError = require('http-errors');
//Init app
const app = express();

const route = require('./routes');

//View engine setup
app.set('views','./views');
app.set('view engine', 'ejs');
app.set('trust proxy',1)
app.use(cookieParser())


app.use(session({
  secret: 'secrect-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 1200000} 
}))


//Set public folder
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

//Start the server
const port = 3000;
app.listen(process.env.PORT || port, function(){
    console.log('Server started on port ' + port);
});

//Routes init
route(app);
