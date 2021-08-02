const conn = require('./config/connect');

class AddonhangModel {
    loadDonHang() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT *,
                            DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao'
                            FROM hoadon where isDelete = 0 and (hoadon.trangthai = 0  or hoadon.trangthai = 1 
                                or hoadon.trangthai = 3 or hoadon.trangthai = 4) ORDER BY mahd DESC`;
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
        
            let  queryCustomer = `SELECT hoadon.*, sanpham.masp, sanpham.tensp, sanpham.giatien,
                                chitiethoadon.soluong,
                                DATE_FORMAT(sanpham.tgtao, '%d/%m/%Y') as 'tgtao'
                                FROM hoadon 
                                JOIN chitiethoadon on hoadon.mahd = chitiethoadon.mahd 
                                JOIN sanpham on sanpham.masp = chitiethoadon.masp where hoadon.mahd = ?`

            conn.query(queryCustomer, [idhd], function (error, result) {
                if(error){
                    reject(error)
                }else{
                    // console.log(result);
                    resolve(result);
                }
            });
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
    loadChitiet(iddonhang){
        return new Promise(function(resolve, reject){
            let queryChitiet = `SELECT *, 
                                DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao'
                                FROM hoadon where hoadon.mahd = ?`;
            conn.query(queryChitiet, [iddonhang], function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    //Hủy đơn hàng
    updateCancelOrder(idmd){
        return new Promise(function(resolve, reject){
            let update = `update hoadon set hoadon.trangthai = 2 where hoadon.mahd = ?`;

            conn.query(update, [idmd], function(error, result){
                if(error){
                    reject(false);
                }else{
                    resolve(true);
                }
            })
        })
    }
    //danh sach don hang da bi huy
    loadDonHangHuy() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT *,
                            DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao'
                            FROM hoadon where isDelete = 0 and (hoadon.trangthai = 2 or hoadon.trangthai = 5) ORDER BY mahd DESC`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
    //cap nhat don hang huy
    updateStatusModelCancel(status, idDh){
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
}

module.exports = new AddonhangModel();