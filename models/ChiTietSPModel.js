const conn = require('./config/connect');

class ChiTietSpModel{

    loadChitiet(idProduct){
        return new Promise(function (resolve, reject) {
            let queryChitiet = 'SELECT * from sanpham JOIN images on sanpham.masp = images.id_masp WHERE sanpham.masp = ?';
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