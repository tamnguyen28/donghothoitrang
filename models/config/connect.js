var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'tamnguyen',
  password : 'Nguyenhuynhminhtam1@',
  database : 'donghothoitrang',
  port : 3306
});

module.exports = connection;