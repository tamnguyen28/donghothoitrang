const conn = require('./config/connect');
class AdtimkiemModel{
    search(keyword){
        return new Promise(function(resolve, reject){
            let data = keyword+'%';
            let querysearch = `SELECT sanpham.*, thuonghieu.tenth
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
    searchKhachhang(keyword){
        return new Promise(function(resolve, reject){
            let datakh = keyword+'%';
            let querysearch = `SELECT *
                               FROM khachhang
                               WHERE khachhang.tenkh like N? OR khachhang.sodienthoai like N?`;
            conn.query(querysearch, [datakh, datakh] ,function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new AdtimkiemModel();