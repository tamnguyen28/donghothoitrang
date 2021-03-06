const conn = require("./config/connect");

class QuenMatKhauModel {
    updateMatKhau(newPass, email) {
        return new Promise(function (resolve, reject) {
            let emailQuery = `Select * from khachhang where khachhang.email = ?`;
            conn.query(emailQuery, [email], function (error, result) {
                
                if (result.length != 0) {
                    let update = `UPDATE khachhang
                    SET khachhang.matkhau = ?
                    WHERE khachhang.makh = ?`;

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

    checkMailExist(email){
        return new Promise(function(resolve, reject){
            let query = `SELECT * FROM khachhang WHERE khachhang.email = ?`;

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

module.exports = new QuenMatKhauModel();