const conn = require('./config/connect');

let childbl = [];
class ChiTietSpModel{

    loadChitiet(idProduct){
        return new Promise(function (resolve, reject) {
            let queryChitiet = `SELECT sanpham.*, bohinhanh.*, thuonghieu.tenth from sanpham JOIN bohinhanh join thuonghieu 
                                on sanpham.masp = bohinhanh.id_masp and sanpham.id_math = thuonghieu.math
                                WHERE sanpham.masp = ?`;
            conn.query(queryChitiet, [idProduct], function (err, result){
                if(err){
                    reject(err);
                }else{
                    
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new ChiTietSpModel();
