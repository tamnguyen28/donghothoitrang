var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'bl5tnlcup4qdubbob2gq-mysql.services.clever-cloud.com',
  user     : 'umpzzmqwvxascwxl',
  password : '5YWyhqk7U3KyrNIuwwhH',
  database : 'bl5tnlcup4qdubbob2gq',
  port : 3306
});
module.exports = connection;