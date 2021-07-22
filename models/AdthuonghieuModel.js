const conn = require ('../models/config/connect');

class AdthuonghieuModel{
    loadThuongHieu(){
        return new Promise(function(resolve, reject){
            let sqlquery = `SELECT * FROM thuonghieu where isDelete = 0 ORDER BY math DESC`;
            conn.query(sqlquery, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }

    createTH(newTh) {
        return new Promise(function (resolve, reject) {
            let b = { tenth: newTh.name, hinhanh: newTh.image, chitiet: newTh.chitiet, isDelete: 0}
            conn.query('insert into thuonghieu SET ?', b, function (err, data) {
                if (err) throw err;
                resolve(true);
            });
        });
    }

    // lấy ra id tin tuc
    async getTrademarkById(idblog){
        return new Promise(function(resolve, reject){
            let queryBlog = `Select * from thuonghieu where thuonghieu.math = ?`;

            conn.query(queryBlog, [idblog], function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    updateTrademark(newTh){
        return new Promise(function(resolve, reject){
            conn.query(`UPDATE thuonghieu
                        SET tenth = ?, hinhanh = ?, chitiet = ?
                        Where math = ?`, [newTh.name, newTh.image, 
                                            newTh.chitiet, newTh.math], function(err,data){
                            if(err) throw err;
                            resolve(true);
                        });
        });
    }

    deleteTrademark(idthuonghieu){
        return new Promise(function(resolve, reject){
            let queryDelete = `UPDATE thuonghieu
                                SET isDelete = 1
                                WHERE math = ?`;
            conn.query(queryDelete, [idthuonghieu], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            })
        })
    }
}

module.exports = new AdthuonghieuModel();