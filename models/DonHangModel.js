const conn = require('./config/connect');
class DonHangModel{
    
    themthongtin(hoadon, labelid_ghtk){
        // console.log(hoadon.trangthai);
        return new Promise(function (resolve, reject) {
            let sqlthongtin = "INSERT INTO hoadon VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, current_timestamp(), ?, ?,'0',?)";
            conn.query(sqlthongtin,[
                hoadon.tennguoinhan,
                hoadon.sdtnguoinhan,
                hoadon.diachinguoinhan,
                hoadon.emailnguoinhan,
                hoadon.tonghoadon,
                hoadon.ghichu,
                hoadon.phuongthucthanhtoan,
                hoadon.trangthai,
                hoadon.idkh,
                labelid_ghtk,
                hoadon.phivanchuyen
            ], function (err, result){
                if (err) {
                    console.log(err);
                    reject(err);
                }else{
                    // console.log(result.insertId);
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
