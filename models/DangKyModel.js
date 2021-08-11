const conn = require("./config/connect");
const md5 = require("md5");

class DangKyModel {
  dangky(khachhang) {
    return new Promise(function (resolve, reject) {
      let querykhachhang =
        "INSERT INTO khachhang VALUES (NULL,?,?,?,?,?,?,?,1,current_timestamp())";
      let passkh =
        khachhang.matkhau && khachhang.matkhau != ""
          ? md5(khachhang.matkhau)
          : "";
      conn.query(
        querykhachhang,
        [
          khachhang.tenkh,
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
              khachhang.id = result.insertId
              resolve(khachhang);
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
        where khachhang.tendangnhap = ?`;

      conn.query(queryExist, [khachhang.id],function (error, result) {
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
                if(result)
                resolve(result[0])
            }
        })
    })
  }
}

module.exports = new DangKyModel();
