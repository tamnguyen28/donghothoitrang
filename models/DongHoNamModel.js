const conn = require('./config/connect');

class DongHoNamModel{
    loadspnam(vitribatdau){
        return new Promise(function (resolve, reject) {
            let sqlquerynam = `SELECT * FROM sanpham JOIN loaisanpham on sanpham.id_maloai = loaisanpham.maloai 
                               where loaisanpham.maloai = 1 and sanpham.isDelete = 0 and sanpham.trangthai = 1 limit ${vitribatdau}, 8`;
            conn.query(sqlquerynam, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    loadAllSanPham(){
        return new Promise(function (resolve, reject) {
            let sqlquerynam = `SELECT * FROM sanpham JOIN loaisanpham on sanpham.id_maloai = loaisanpham.maloai 
                               where loaisanpham.maloai = 1 and sanpham.isDelete = 0 and sanpham.trangthai = 1`;
            conn.query(sqlquerynam, function (err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    locgia(minPrice, maxPrice, isDongNam){
        return new Promise(function(resolve, reject){
            let queryPrice = `SELECT sanpham.* 
                        FROM sanpham JOIN thuonghieu on sanpham.id_math = thuonghieu.math 
                        WHERE sanpham.giatien BETWEEN ? and ? and id_maloai = ? and sanpham.isDelete = 0 and sanpham.trangthai = 1`;

            conn.query(queryPrice, [minPrice, maxPrice, isDongNam], function(error, result){
                if(error){
                    console.log(error);

                    reject(false);
                }else{
                    resolve(result);
                }
            })
        })
    }

    locgiaLimit(minPrice, maxPrice, isDongNam, vitribatdau){
        return new Promise(function(resolve, reject){
            let queryPrice = `SELECT sanpham.* 
                        FROM sanpham JOIN thuonghieu on sanpham.id_math = thuonghieu.math 
                        WHERE sanpham.giatien BETWEEN ? and ? and id_maloai = ? and sanpham.isDelete = 0 and sanpham.trangthai = 1 LIMIT ${vitribatdau}, 8`;

            conn.query(queryPrice, [minPrice, maxPrice, isDongNam], function(error, result){
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

module.exports = new DongHoNamModel();