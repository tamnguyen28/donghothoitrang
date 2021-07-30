const conn = require('./config/connect');

class DongHoNuModel{
    loadspnu(vitribatdau){
        return new Promise(function (resolve, reject) {
            let sqlquerynu = `SELECT * FROM sanpham JOIN loaisanpham on sanpham.id_maloai = loaisanpham.maloai where loaisanpham.maloai = 2 limit ${vitribatdau}, 8`;
            conn.query(sqlquerynu, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    loadAllSanPhamNu(){
        return new Promise(function (resolve, reject) {
            let sqlquerynu = `SELECT * FROM sanpham JOIN loaisanpham on sanpham.id_maloai = loaisanpham.maloai where loaisanpham.maloai = 2`;
            conn.query(sqlquerynu, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new DongHoNuModel();