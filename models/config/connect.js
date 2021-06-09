var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'donghothoitrang',
  port : 3306
});
module.exports = connection;