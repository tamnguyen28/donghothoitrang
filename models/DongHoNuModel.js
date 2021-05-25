const conn = require('./config/connect');

class DongHoNuModel{
    loadspnam(){
        return new Promise(function (resolve, reject) {
            let sqlquerynu = 'SELECT * FROM sanpham limit 64, 12';
            conn.query(sqlquerynu, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new DongHoNuModel();