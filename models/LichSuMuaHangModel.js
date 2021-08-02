const conn = require('./config/connect');

class LichSuMuaHangModel{
    loadDonhang(idCustomer){
        // console.log(idCustomer);
        return new Promise (function(resolve, reject){
            let queryDonhang = `SELECT hoadon.mahd, sanpham.tensp, hoadon.tonghoadon, hoadon.id_ghtk, DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao', hoadon.phivanchuyen  
                                FROM hoadon JOIN khachhang on khachhang.makh = hoadon.id_makh
                                JOIN chitiethoadon on chitiethoadon.mahd = hoadon.mahd 
                                JOIN sanpham on sanpham.masp = chitiethoadon.masp WHERE khachhang.makh = ?`;
            conn.query(queryDonhang, [idCustomer],function(err, result){
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }

    getChiTietDonHang(mahd, idkhachhang) {
        return new Promise(function(resolve, reject){
            let queryChitiet = `SELECT hoadon.mahd,
                                sanpham.masp,
                                sanpham.tensp,
                                sanpham.hinhanh,
                                sanpham.mota,
                                sanpham.giatien,
                                hoadon.tennguoinhan,
                                hoadon.sdtnguoinhan,
                                hoadon.diachinguoinhan,
                                hoadon.tonghoadon,
                                hoadon.phuongthucthanhtoan,
                                hoadon.trangthai,
                                hoadon.id_ghtk,
                                hoadon.phivanchuyen,
                                DATE_FORMAT(hoadon.tgtao, '%d/%m/%Y') as 'tgtao',
                                chitiethoadon.soluong      
                        FROM hoadon JOIN khachhang on khachhang.makh = hoadon.id_makh
                        JOIN chitiethoadon on chitiethoadon.mahd = hoadon.mahd 
                        JOIN sanpham on sanpham.masp = chitiethoadon.masp WHERE khachhang.makh = ? And hoadon.mahd = ?`;
            conn.query(queryChitiet, [idkhachhang, mahd], function(error, result){
                if(error){
                    reject(error)
                }else{
                    resolve(result);
                }
            })
        })
    }

    updateStatusHuyDonHang(idmd){
        return new Promise(function(resolve, reject){
            let update = `update hoadon set hoadon.trangthai = 2 where hoadon.mahd = ?`;

            conn.query(update, [idmd], function(error, result){
                if(error){
                    reject(false);
                }else{
                    resolve(true);
                }
            })
        });
        
    }

    checkDonHangDangGiao(iddh){
        return new Promise(function(resolve, reject){
            let query = `select * from hoadon WHERE hoadon.mahd = ?`;

            conn.query(query, [iddh], function(error, result){
                if(error){
                    console.log(error);

                    reject(error);
                }else{
                    if(result[0].trangthai  == 3 || result[0].trangthai  == 4){
                        resolve(false);
                    }else{
                        resolve(true);
                    }
                }
            })
        })
    }
}



module.exports = new LichSuMuaHangModel();
