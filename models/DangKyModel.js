const conn = require('./config/connect');
const md5 =require('md5');

class DangKyModel{

    dangky(khachhang){

        return new Promise(function(resolve, reject){
            let querykhachhang = "INSERT INTO khachhang VALUES (NULL,?,?,?,?,?,?,1,NULL)";

            conn.query(querykhachhang, [
                khachhang.tenkhachang,
                khachhang.diachi,
                khachhang.email,
                khachhang.sodienthoai,
                khachhang.taikhoan,
                md5(khachhang.matkhau)
            ], function(err, result){
                if(err){
                    reject(err);
                }else{
                    if(result.insertId){//insertId là cái id mới add vào(khóa chính tự tăng theo makh)
                        resolve(true)
                    }else{
                        reject(false);
                    }
                }
            })    
        });
   }

}

module.exports = new DangKyModel();
