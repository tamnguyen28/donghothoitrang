const conn = require("./config/connect");

class AdcanhanModel {

  updateCanhan(nv) {
    return new Promise(function (resolve, reject) {
      let queryUpdate = `Update nhanvien
                        Set nhanvien.tennv = ?, nhanvien.email = ?, nhanvien.sodienthoai = ? 
                        Where nhanvien.manv = ?`;

      conn.query(queryUpdate, [nv.tennhanvien, nv.email, nv.sodienthoai, nv.manv], function (error, result) {
        if (error) {
          // console.log(error);
          reject(false);
        } else {
          resolve(true);
        }
      })
    })
  }

  getCanhanById(idNhanvien) {
    return new Promise(function (resolve, reject) {
      let querynhanvien = `Select * from nhanvien where nhanvien.manv = ?`;

      conn.query(querynhanvien, [idNhanvien], function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result[0]);
        }
      })
    })
  }
//check đúng password cũ
  checkOldPassword(oldPass, idEm){
    return new Promise(function(resolve, reject){
      let query = `Select * from nhanvien where nhanvien.matkhau = ? and nhanvien.manv = ?`;

      conn.query(query, [oldPass, idEm], function(errorEmployee, result){
        if(errorEmployee){
          // console.log(errorEmployee);
          reject(false);    
        }else{
            if(result.length != 0){
              resolve(true);
            }else{
              reject(false);
            }
        }
      });
    })
  }
//cập nhật password mới
  updateNewPass(newPass, idEmployee) {
    return new Promise(function (resolve, reject) {
      let query = `update nhanvien
                 set nhanvien.matkhau = ? 
                 where nhanvien.manv = ?`
      // console.log("ABC");
      conn.query(query, [newPass, idEmployee], function (error, result) {
        if (error) {
          // console.log(error);
          reject(false);
        } else {
          // console.log( result);
          resolve(true)
        }
      });
    })
  }
}

module.exports = new AdcanhanModel();
