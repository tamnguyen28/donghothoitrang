const conn = require("./config/connect");
const md5 = require("md5");

class DangKyModel {
  dangky(khachhang) {
    return new Promise(function (resolve, reject) {
      let querykhachhang =
        "INSERT INTO khachhang VALUES (NULL,?,?,?,?,?,?,?,1,NULL)";
      let passkh =
        khachhang.matkhau && khachhang.matkhau != ""
          ? md5(khachhang.matkhau)
          : "";
      conn.query(
        querykhachhang,
        [
          khachhang.tenkhachang,
          khachhang.diachi,
          khachhang.email,
          khachhang.sodienthoai,
          khachhang.taikhoan,
          passkh,
          khachhang.ptdangnhap,
        ],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            if (result.insertId) {
              //insertId là cái id mới add vào(khóa chính tự tăng theo makh)
              resolve(result.insertId);
            } else {
              reject(false);
            }
          }
        }
      );
    });
  }

  checkKhachHangTonTai(khachhang) {
    return new Promise(function (resolve, reject) {
      let queryExist = `SELECT * FROM khachhang 
        where khachhang.tenkh = ? AND (khachhang.ptdangnhap ='google' OR khachhang.ptdangnhap = 'facebook')`;

      conn.query(queryExist, [khachhang.tenkhachang],function (error, result) {
        if (error) {
            reject(error);
        } else {
            resolve(result.length);
        }
      });
    });
  }

  getAccountByID(idCustomer){
    return new Promise(function(resolve, reject){
        let queryCustomer = `Select * from khachhang where khachhang.tendangnhap = ?`;

        conn.query(queryCustomer, [idCustomer],function(error, result){
            if(error){
                reject(error)
            }else{
                resolve(result[0])
            }
        })
    })
  }
}

module.exports = new DangKyModel();
