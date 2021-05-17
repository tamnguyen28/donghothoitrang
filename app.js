const express = require('express');
const path = require('path');
const conn = require('./models/config/connect');
//Init app
const app = express();

const route = require('./routes');

//Connect to DB
conn.connect();

//View engine setup
app.set('views','./views');
app.set('view engine', 'ejs');

//Set public folder
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

//Start the server
const port = 3000;
app.listen(process.env.PORT || 3000);

//Routes init
route(app);