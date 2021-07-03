const conn = require ('../models/config/connect');

class AdtintucModel{
    loadtintuc(){
        return new Promise(function(resolve, reject){
            let sqlquery = `SELECT *,
                            DATE_FORMAT(tintuc.tgtao, '%d/%m/%Y') as 'tgtao'
            FROM tintuc where isDelete = 0 ORDER BY matt DESC`;
            conn.query(sqlquery, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }

    createTinTuc(newTt) {
        return new Promise(function (resolve, reject) {
            let b = { tieude: newTt.name, noidung: newTt.noidung, hinhanh: newTt.image, trangthai: newTt.status,isDelete: 0}
            conn.query('insert into tintuc SET ?', b, function (err, data) {
                if (err) throw err;
                resolve(true);
            });
        });
    }

    //lấy ra id tin tuc
    async getBlogById(idblog){
        return new Promise(function(resolve, reject){
            let queryBlog = `Select * from tintuc where tintuc.matt = ?`;

            conn.query(queryBlog, [idblog], function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    updateTinTuc(newTt){
        return new Promise(function(resolve, reject){
            conn.query(`UPDATE tintuc
                        SET tieude = ?, noidung = ?, trangthai = ?, hinhanh = ?
                        Where matt = ?`, [newTt.name, newTt.noidung, newTt.status,
                                         newTt.image, newTt.matt], function(err,data){
                            if(err) throw err;
                            resolve(true);
                        });
        });
    }

    deleteTinTuc(idtintuc){
        return new Promise(function(resolve, reject){
            let queryDelete = `UPDATE tintuc
                                SET isDelete = 1
                                WHERE matt = ?`;
            conn.query(queryDelete, [idtintuc], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            })
        })
    }
}

module.exports = new AdtintucModel();