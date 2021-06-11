const conn = require('./config/connect');

let childbl = [];
class ChiTietSpModel{

    loadChitiet(idProduct){
        return new Promise(function (resolve, reject) {
            let queryChitiet = `SELECT sanpham.*, bohinhanh.*, thuonghieu.tenth from sanpham JOIN bohinhanh join thuonghieu 
                                on sanpham.masp = bohinhanh.id_masp and sanpham.id_math = thuonghieu.math
                                WHERE sanpham.masp = ?`;
            conn.query(queryChitiet, [idProduct], function (err, result){
                if(err){
                    reject(err);
                }else{
                    
                    resolve(result);
                }
            })
        })
    }


    loadBinhLuan(idsp){
        return new Promise(function(resolve, reject){
            let query = `SELECT * FROM binhluan where id_masp = ${idsp}`;
            conn.query(query, function(error, result){
                if(error){
                    reject(error);
                }else{
                    let slbl = result.length;
                    for(let i = 0; i < slbl; i++){
                        let childBinhLuan = `SELECT * FROM binhluan where id_masp = ${idsp} and isParrent = ${result[i].mabl}`;
                        conn.query(childBinhLuan, function(errorChild, resultchild){
                            if(errorChild){
                                console.log(errorChild);
                            }else{
                                childbl.push(resultchild)  
                            }
                        })
                    }

                    resolve([result,childbl]);      
                }
            })
        })
    }
}



module.exports = new ChiTietSpModel();

// SELECT * from sanpham JOIN bohinhanh on sanpham.masp = bohinhanh.id_masp WHERE sanpham.masp = ?