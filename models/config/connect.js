var mysql      = require('mysql');
var connection = mysql.createConnection({
<<<<<<< HEAD
  host     : 'sql6.freesqldatabase.com',
  user     : 'sql6418648',
  password : '8Dg17tT43n',
  database : 'sql6418648',
=======
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'donghothoitrang',
>>>>>>> client
  port : 3306
});
module.exports = connection;