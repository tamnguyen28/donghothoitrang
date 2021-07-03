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
}

module.exports = new AdcanhanModel();
