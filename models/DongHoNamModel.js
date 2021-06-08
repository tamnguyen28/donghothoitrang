const conn = require('./config/connect');

class DongHoNamModel{
    loadspnam(){
        return new Promise(function (resolve, reject) {
            let sqlquerynam = 'SELECT * FROM sanpham limit 40, 12';
            conn.query(sqlquerynam, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new DongHoNamModel();