const conn = require('./config/connect');

class AdlienheModel{
    loadLienHe(){
        return new Promise(function(resolve, reject){
            let sqlquery = `SELECT *,
                                DATE_FORMAT(lienhe.tgtao, '%d/%m/%Y') as 'tgtao'
                            FROM lienhe WHERE isDelete = 0 ORDER BY malh DESC`;
            conn.query(sqlquery, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    }

    deletelienhe(idlienhe){
        return new Promise(function(resolve, reject){
            let queryDelete = `UPDATE lienhe
                                SET isDelete = 1
                                WHERE malh = ?`;
            conn.query(queryDelete, [idlienhe], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            })
        })
    }
   
}

module.exports = new AdlienheModel();