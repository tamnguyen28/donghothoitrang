const conn = require("./config/connect");

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
}

module.exports = new CaNhanModel();
