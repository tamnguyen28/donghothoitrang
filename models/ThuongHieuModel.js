const conn = require('./config/connect');

class ThuongHieuModel{

    loadThuonghieu(){
        return new Promise (function (resolve, reject){
            let sqlquerythuonghieu = 'SELECT * FROM thuonghieu limit 0,16';
            conn.query(sqlquerythuonghieu, function (err, result){
                if(err){
                    reject(err);
                }else {
                    resolve(result);
                }
            }) 
        });
    }
    loadSPThuonghieu(){
        return new Promise(function(resolve, reject){
            let sqlsp = 'SELECT * FROM sanpham limit 40,12';
            conn.query(sqlsp, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    loadRandom(){
        return new Promise (function (resolve, reject){
            let sqlrandom = 'SELECT * FROM sanpham limit 19, 3';
            conn.query(sqlrandom, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    loadProductByTranmarkId(idtranmark){
        return new Promise(function(resolve, reject){
            let queryProduct = `SELECT sanpham.masp, sanpham.tensp, sanpham.giatien, sanpham.hinhanh FROM sanpham join thuonghieu on sanpham.id_math = thuonghieu.math WHERE thuonghieu.math = ?`;

            conn.query(queryProduct, [idtranmark], function(error, result){
                if(error){
                    console.log(error);
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })   
    }
}

module.exports = new ThuongHieuModel();