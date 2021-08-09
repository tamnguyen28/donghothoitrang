const conn = require("./config/connect");
const md5 = require("md5");

class CaNhanModel {

  updateKhachHang(kh) {
    return new Promise(function (resolve, reject) {
      let queryUpdate = `Update khachhang
                        Set khachhang.tenkh = ?, khachhang.diachi = ?, khachhang.email = ?, khachhang.sodienthoai = ?
                        Where khachhang.makh = ? `;

      conn.query(queryUpdate, [kh.tenkhachang, kh.diachi, kh.email, kh.sodienthoai, kh.makh], function (error, result) {
        if (error) {
          reject(false);
        } else {
          resolve(true);
        }
      })
    })
  }

  getKhachHangById(idCustomer) {
    return new Promise(function (resolve, reject) {
      let queryCustomer = `Select * from khachhang where khachhang.makh = ?`;

      conn.query(queryCustomer, [idCustomer], function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result[0]);
        }
      })
    })
  }

  //Đổi mật khẩu
  //check đúng password cũ
  checkOldPassword(oldPass, idEm){
    return new Promise(function(resolve, reject){
      let query = `Select * from khachhang where khachhang.matkhau = ? and khachhang.makh = ?`;

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
      let query = `update khachhang set khachhang.matkhau = ? where khachhang.makh = ?`
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

module.exports = new CaNhanModel();
