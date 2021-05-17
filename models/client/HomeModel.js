const conn = require('../config/connect');

class HomeModel {
    loadSanPham(){
        return new Promise(function (resolve, reject) {
            let sqlquery = 'SELECT * FROM sanpham limit 0,6';
            conn.query(sqlquery, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        });
    }
}
module.exports = new HomeModel();
