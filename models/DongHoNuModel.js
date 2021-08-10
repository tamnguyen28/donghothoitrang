const conn = require('./config/connect');

class DongHoNuModel{
    loadspnu(vitribatdau){
        return new Promise(function (resolve, reject) {
            let sqlquerynu = `SELECT * FROM sanpham JOIN loaisanpham on sanpham.id_maloai = loaisanpham.maloai 
                              where loaisanpham.maloai = 2 and sanpham.isDelete = 0 limit ${vitribatdau}, 8`;
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
            let sqlquerynu = `SELECT * FROM sanpham JOIN loaisanpham on sanpham.id_maloai = loaisanpham.maloai 
                              where loaisanpham.maloai = 2 and sanpham.isDelete = 0`;
            conn.query(sqlquerynu, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    locgia(minPrice, maxPrice, isDongNu){
        return new Promise(function(resolve, reject){
            let queryPrice = `SELECT sanpham.* 
                        FROM sanpham JOIN thuonghieu on sanpham.id_math = thuonghieu.math 
                        WHERE sanpham.giatien BETWEEN ? and ? and id_maloai = ? and sanpham.isDelete = 0`;

            conn.query(queryPrice, [minPrice, maxPrice, isDongNu], function(error, result){
                if(error){
                    console.log(error);

                    reject(false);
                }else{
                    resolve(result);
                }
            })
        })
    }
    locgiaLimitNu(minPrice, maxPrice, isDongNu, vitribatdau){
        return new Promise(function(resolve, reject){
            let queryPrice = `SELECT sanpham.* 
                        FROM sanpham JOIN thuonghieu on sanpham.id_math = thuonghieu.math 
                        WHERE sanpham.giatien BETWEEN ? and ? and id_maloai = ? and sanpham.isDelete = 0 LIMIT ${vitribatdau}, 8`;

            conn.query(queryPrice, [minPrice, maxPrice, isDongNu], function(error, result){
                if(error){
                    console.log(error);

                    reject(false);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new DongHoNuModel();