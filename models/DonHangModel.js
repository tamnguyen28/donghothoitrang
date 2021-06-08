const conn = require('./config/connect');

class DonHangModel{
    themthongtin(hoadon){
        return new Promise(function (resolve, reject) {
            let sqlthongtin = "INSERT INTO hoadon VALUES (NULL, ?, ?, ?, ?, ?, ?, '1', current_timestamp(), '2')";
            conn.query(sqlthongtin,[
                hoadon.tennguoinhan,
                hoadon.sdtnguoinhan,
                hoadon.diachinguoinhan,
                hoadon.tonghoadon,
                hoadon.ghichu,
                hoadon.phuongthucthanhtoan,
            ], function (err, result){
                if (err) {
                    reject(err);
                }else{
                    if(result.insertId){
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
