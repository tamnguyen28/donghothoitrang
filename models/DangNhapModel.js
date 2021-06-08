const conn = require('./config/connect');
const md5 =require('md5');

class DangNhapModel{

    dangnhap(tendangnhap, matkhau){
        return new Promise(function(resolve, reject){
            matkhau = md5(matkhau);
              let query = 'SELECT * from khachhang WHERE (khachhang.email = ? OR khachhang.tendangnhap = ?) And khachhang.matkhau = ?';
              conn.query(query, [tendangnhap, tendangnhap,matkhau], function(err, result){
                if(err) {
                    reject(err);
                }else{
                    if(result.length != 0){
                        resolve(result[0])
                    }else{
                        reject(false)
                    }
                }
              })
        });
   }

}

module.exports = new DangNhapModel();
