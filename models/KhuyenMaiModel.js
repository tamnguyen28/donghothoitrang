const conn = require('./config/connect');

class KhuyenMaiModel{
    loadsieusale(){
        return new Promise(function (resolve, reject) {
            let querysieusale = 'SELECT * FROM sanpham limit 0,6';
            conn.query(querysieusale, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    loadbanchay(){
        return new Promise(function (resolve, reject) {
            let querybanchay = "SELECT * FROM sanpham limit 7,6";
            conn.query(querybanchay, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    loadhangdau(){
        return new Promise(function (resolve, reject) {
            let queryhd = 'SELECT * FROM sanpham limit 13,6';
            conn.query(queryhd, function (err, result) {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new KhuyenMaiModel();