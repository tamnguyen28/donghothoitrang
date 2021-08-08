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

                    conn.query(update, [newPass, result[0].manv], function (error) {
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
    checkMailExist(email){
        return new Promise(function(resolve, reject){
            let query = `SELECT * FROM nhanvien WHERE nhanvien.email = ?`;

            conn.query(query, [email], function(error, result){
                if(error){
                    console.log(error);
                }else{
                    if(result == 0){
                        resolve(false);
                    }else{
                        resolve(true);
                    }
                }

            })
        })
    }
}

module.exports = new AdquenmatkhauModel();