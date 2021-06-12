const conn = require('./config/connect');

class AdnhanvienModel{
    loadnhanvien(){
        return new Promise(function(resolve, reject){
            let sqlquery = `SELECT * FROM nhanvien JOIN loainhanvien 
                            on nhanvien.id_maloainv = loainhanvien.maloainv 
                            where isDelete = 0`;
            conn.query(sqlquery, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }
    loadLoaiNV() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT * FROM loainhanvien`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
    createNhanVien(newNV){
        return new Promise(function(resolve, reject){
            let b = { tennv: newNV.name, email: newNV.email, matkhau: newNV.password, 
                        sodienthoai: newNV.phone, trangthai: newNV.status, id_maloainv: newNV.type}
            conn.query('insert into nhanvien SET ?', b , function(err, data){
                if(err) throw err;
                resolve(true);
            });
        });
    }
    deleteNhanVien(idnhanvien){
        return new Promise(function(resolve, reject){
            let queryDelete = `UPDATE nhanvien
                                SET isDelete = 1
                                WHERE manv = ?`;
            conn.query(queryDelete, [idnhanvien], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            })
        })
    }

}

module.exports = new AdnhanvienModel();