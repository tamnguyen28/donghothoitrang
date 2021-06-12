var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql6.freesqldatabase.com',
  user     : 'sql6418648',
  password : '8Dg17tT43n',
  database : 'sql6418648',
  port : 3306
});
module.exports = connection;