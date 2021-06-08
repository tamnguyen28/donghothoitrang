const conn = require('./config/connect');

class AdkhachhangModel {
    loadKhachHang() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT * FROM khachhang ORDER BY makh DESC`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    //lấy ra id sản phẩm
    getOrderByCustomerId(idkh) {
        return new Promise(function (resolve, reject) {

            let queryCustomer =  `SELECT * from hoadon join khachhang on hoadon.id_makh = khachhang.makh 
                                    WHERE khachhang.makh = ?`;
            
            conn.query(queryCustomer, [idkh], function (error, result) {
                if(error){
                    reject(error)
                }else{
                    resolve(result);
                }
            });
        })

    }

}

module.exports = new AdkhachhangModel();