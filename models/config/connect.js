var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql-46526-0.cloudclusters.net',
  user     : 'admin',
  password : 'M9kpjqFA',
  database : 'donghothoitrang',
  port : 19832
});
module.exports = connection;