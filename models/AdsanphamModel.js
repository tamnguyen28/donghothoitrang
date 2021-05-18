const conn = require('./config/connect');

class AdsanphamModel{
    loadSanPham(){
        return new Promise(function (resolve,reject){
            let sqlquery = `SELECT * FROM sanpham`;
            conn.query(sqlquery, function(err,result){
                if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
            })
        })
    }
}
module.exports = new AdsanphamModel();