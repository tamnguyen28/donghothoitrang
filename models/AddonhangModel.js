const conn = require('./config/connect');

class AddonhangModel {
    loadDonHang() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT *,
                            DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao'
                            FROM hoadon where isDelete = 0 ORDER BY mahd DESC`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    //lấy ra id hoadon
    getOrderByOrderId(idhd) {
        return new Promise(function (resolve, reject) {
        
            let  queryCustomer = `SELECT hoadon.*, sanpham.masp, sanpham.tensp,
                                DATE_FORMAT(sanpham.tgtao, '%d/%m/%Y') as 'tgtao'
                                FROM hoadon 
                                JOIN chitiethoadon on hoadon.mahd = chitiethoadon.mahd 
                                JOIN sanpham on sanpham.masp = chitiethoadon.masp where hoadon.mahd = ?`

            conn.query(queryCustomer, [idhd], function (error, result) {
                if(error){
                    reject(error)
                }else{
                    console.log(result);
                    resolve(result);
                }
            });
        })
    }
    deleteDonHang(iddonhang){
        return new Promise(function(resolve, reject){
            let queryDelete = `UPDATE hoadon
                                SET isDelete = 1
                                WHERE mahd = ?`;
            conn.query(queryDelete, [iddonhang], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    updateStatusModel(status, idDh){
      return new Promise(function(resolve, reject){
            let queryUpdateDH =`update hoadon 
                            set hoadon.trangthai = ? 
                            where hoadon.mahd = ?`;
        
            conn.query(queryUpdateDH, [status, idDh],function(error, result){
                if(error){
                    // console.log(error);
                    reject(error);
                }else{
                    // console.log(result);
                    resolve(result);
                }
            })
        })    
    }

    DoanhThu(namhientai){
        return new Promise(function(resolve, result){
            let querynamhientai = `SELECT SUM(hoadon.tonghoadon) as 'doanhthu' , MONTH(hoadon.tgtao) as 'thang' 
                                    FROM hoadon 
                                    WHERE MONTH(hoadon.tgtao) BETWEEN 1 and 12 And YEAR(hoadon.tgtao) = ?
                                    GROUP by MONTH(hoadon.tgtao)`;
            conn.query(querynamhientai, [namhientai], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = new AddonhangModel();