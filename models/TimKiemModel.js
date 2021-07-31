const conn = require('./config/connect');
class TimKiemModel{
    search(keyword){
        return new Promise(function(resolve, reject){
            let data = keyword+'%';
            let querysearch = `SELECT sanpham.* 
                               FROM sanpham JOIN thuonghieu on sanpham.id_math = thuonghieu.math 
                               WHERE sanpham.tensp like N? OR thuonghieu.tenth like N?`;
            conn.query(querysearch, [data, data] ,function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

}

module.exports = new TimKiemModel();