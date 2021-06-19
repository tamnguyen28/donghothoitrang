const conn = require('./config/connect');

class DonHangModel{
    
    themthongtin(hoadon){
        return new Promise(function (resolve, reject) {
            let sqlthongtin = "INSERT INTO hoadon VALUES (NULL, ?, ?, ?, ?, ?, ?, '0', current_timestamp(), ?, '0')";
            conn.query(sqlthongtin,[
                hoadon.tennguoinhan,
                hoadon.sdtnguoinhan,
                hoadon.diachinguoinhan,
                hoadon.tonghoadon,
                hoadon.ghichu,
                hoadon.phuongthucthanhtoan,
                hoadon.idkh
            ], function (err, result){
                if (err) {
                    reject(err);
                }else{
                    if(result.insertId){
                        let slsp = hoadon.giohangs.length;
                        let queryChiTietHoaDon = `Insert into chitiethoadon values (Null, ? , ?, ?,current_timestamp())`;
                        for(let i = 0; i < slsp; i++){
                            conn.query(queryChiTietHoaDon, [hoadon.giohangs[i].masp, result.insertId,hoadon.giohangs[i].soluong], function(error,result){
                                if(error){
                                    console.log(error);
                                }
                            })
                        }
                        resolve(true);
                    }else{
                        reject(false);
                    }
                }
            })
        })
    }
}
module.exports= new DonHangModel();
