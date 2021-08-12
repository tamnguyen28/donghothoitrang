const conn = require('./config/connect');

class LienHeModel{
    index(tintuc){
        return new Promise(function (resolve, reject) {
            let querytintuc = "INSERT INTO lienhe VALUES (NULL,?,?,?,?,?,current_timestamp(),2,0)";
            
            conn.query(querytintuc, [
                tintuc.tennguoilh,
                tintuc.sodienthoai,
                tintuc.email,
                tintuc.tieude,
                tintuc.noidung
            ], function(err, result){
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    if(result.insertId){       
                        resolve(true);
                    }else{
                        reject(false);
                    }
                }
            })
        });
    }
}

module.exports = new LienHeModel();