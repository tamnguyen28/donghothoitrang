const conn = require('./config/connect');

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

    loadSanPhamDealhot(){
        return new Promise(function (resolve, reject) {
            let sqlquerydeal = 'SELECT * FROM sanpham limit 6,12';
            conn.query(sqlquerydeal, function (err, result) {
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
