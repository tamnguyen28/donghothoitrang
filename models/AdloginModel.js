const conn = require('./config/connect');
const md5 = require('md5');

class AdloginModel {

  login(tennv, matkhau) {
    return new Promise(function (resolve, reject) {
      matkhau = md5(matkhau);
      let query = `select * from nhanvien where (nhanvien.email = ? OR nhanvien.tennv = ?) 
                    and nhanvien.matkhau = ? and nhanvien.trangthai = 1`;
      conn.query(query, [tennv, tennv, matkhau], function (err, result) {
        if (err) {      
          console.log(err);
            reject(err)
        } else {
            if(result.length != 0){
              
                resolve(result[0])
            }else{
                reject(false)
            }
        }
      })
    });
  }
}
module.exports = new AdloginModel
