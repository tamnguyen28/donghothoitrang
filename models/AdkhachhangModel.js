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
    getOrderByCustomerId(idcustomer) {
        return new Promise(function (resolve, reject) {
            let queryCustomer = `SELECT sanpham.masp, sanpham.tensp, hoadon.tgtao from hoadon 
                JOIN khachhang on hoadon.id_makh = khachhang.makh 
                JOIN chitiethoadon on chitiethoadon.mahd = hoadon.mahd 
                JOIN sanpham on sanpham.masp = chitiethoadon.masp
                WHERE khachhang.makh = ?`;

            conn.query(queryCustomer, [idcustomer], function (error, result) {
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