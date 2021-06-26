const conn = require('./config/connect');

class LichSuMuaHangModel{
    loadDonhang(idCustomer){
        // console.log(idCustomer);
        return new Promise (function(resolve, reject){
            let queryDonhang = `SELECT hoadon.mahd,
                                        sanpham.masp,
                                        sanpham.tensp,
                                        hoadon.tennguoinhan,
                                        hoadon.tonghoadon,
                                        hoadon.phuongthucthanhtoan,
                                        hoadon.trangthai,
                                        DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao' 
                                FROM hoadon JOIN khachhang on khachhang.makh = hoadon.id_makh
                                JOIN chitiethoadon on chitiethoadon.mahd = hoadon.mahd 
                                JOIN sanpham on sanpham.masp = chitiethoadon.masp WHERE khachhang.makh = ?`;
            conn.query(queryDonhang, [idCustomer],function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }
}
module.exports = new LichSuMuaHangModel();
