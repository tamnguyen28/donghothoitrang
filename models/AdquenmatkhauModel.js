const conn = require("./config/connect");

class AdquenmatkhauModel {
    updateMatKhau(newPass, email) {
        return new Promise(function (resolve, reject) {
            let emailQuery = `Select * from nhanvien where nhanvien.email = ?`;
            conn.query(emailQuery, [email], function (error, result) {
                
                if (result.length != 0) {
                    let update = `UPDATE nhanvien
                    SET nhanvien.matkhau = ?
                    WHERE nhanvien.manv = ?`;

                    conn.query(update, [newPass, result[0].makh], function (error) {
                        if (error) {
                            console.log(error);
                            reject(false);
                        } else {
                            resolve(true);
                        }
                    })
                }else{
                    reject(false);
                }       
            })


        });
    }
}

module.exports = new AdquenmatkhauModel();