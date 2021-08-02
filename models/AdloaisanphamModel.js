const conn = require('./config/connect');

class AdloaisanphamModel{
    loadLoaiSP(){
        return new Promise(function(resolve, reject){
            let sqlquery = `SELECT *,
                                DATE_FORMAT(loaisanpham.tgtao, '%d/%m/%Y') as 'tgtao'
                            FROM loaisanpham WHERE isDelete = 0`;
            conn.query(sqlquery, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }

    createLoaiSanPham(newLSP){
        return new Promise(function(resolve, reject){
            let b = {tenloai: newLSP.name, isDelete: 0};
            conn.query('insert into loaisanpham SET ?', b, function(err, data){
                if(err) throw err;
                resolve(true);
            });
        });
    }

    deleteloaisp(idloaisp){
        return new Promise(function(resolve, reject){
            let queryDelete = `UPDATE loaisanpham
                                SET isDelete = 1
                                WHERE maloai = ?`;
            conn.query(queryDelete, [idloaisp], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            })
        })
    }
    //lấy ra id loại sản phẩm
     async getLoaispById(idLSP){
        return new Promise(function(resolve, reject){
            let queryLSP = `Select * from loaisanpham where loaisanpham.maloai = ?`;

            conn.query(queryLSP, [idLSP], function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    updateLoaisanpham(newLSP){
        return new Promise(function(resolve, reject){
            conn.query(`UPDATE loaisanpham
                        SET tenloai = ?
                        WHERE maloai = ?`, [newLSP.name, newLSP.maloai], function(err, data){
                            if(err) throw err;
                            resolve(true);
                        });
        });
    }

}

module.exports = new AdloaisanphamModel();