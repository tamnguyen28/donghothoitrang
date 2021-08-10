const conn = require('./config/connect');

class TinTucModel{
    loadSPTT(){
        return new Promise(function (resolve, reject) {
            let sqltt = "SELECT * FROM sanpham where isDelete = 0 limit 7, 4";
            conn.query(sqltt, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    loadtintuc(){
        return new Promise (function (resolve, reject){
            let sqltintuc = "SELECT *, DATE_FORMAT(tintuc.tgtao, '%d/%m/%Y') as 'tgtao' FROM tintuc where tintuc.trangthai = 1 and isDelete = 0";
            conn.query(sqltintuc, function (err,result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports= new TinTucModel();