const conn = require('./config/connect');

class AdsanphamModel {
    loadSanPham() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT * FROM sanpham Where isDelete = 0 ORDER BY masp DESC`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    loadDanhMuc() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT * FROM loaisanpham`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
    loadThuongHieu() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT * FROM thuonghieu`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    createSanPham(newSp) {
        return new Promise(function (resolve, reject) {
            let b = { tensp: newSp.name, giatien: newSp.price, trangthai: newSp.status, hinhanh: newSp.image, id_math: newSp.trademark, id_maloai: newSp.type, mota: newSp.mota }
            conn.query('insert into sanpham SET ?', b, function (err, data) {
                if (err) throw err;
                resolve(true);
            });
        });
    }
    //lấy ra id sản phẩm
    async getProductById(idproduct) {
        return new Promise(function (resolve, reject) {
            let queryProduct = `Select * from sanpham where sanpham.masp = ?`;

            conn.query(queryProduct, [idproduct], function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    // console.log(result);
                    resolve(result);
                }
            })
        })
    }

    updateSanPham(newSp) {
        return new Promise(function (resolve, reject) {
            // let b = {tensp: newSp.name, giatien: newSp.price, trangthai: newSp.status, hinhanh: newSp.image, id_math: newSp.trademark, id_maloai: newSp.type, mota: newSp.mota, masp: newSp.masp }
            conn.query(`UPDATE sanpham 
                        SET tensp = ?, giatien = ?, trangthai = ?, hinhanh = ?, id_math = ?, id_maloai = ?, mota = ? 
                        Where masp = ?`, [newSp.name, newSp.price, newSp.status, newSp.image, newSp.trademark, newSp.type, newSp.mota, newSp.masp], function (err, data) {
                if (err) throw err;
                resolve(true);
            });
        });
    }

    deleteSanPham(idsanpham) {
        return new Promise(function (resolve, reject) {
            let queryDelete = `UPDATE sanpham
                            SET isDelete = 1
                            WHERE masp = ?`;
            conn.query(queryDelete, [idsanpham], function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            });
        })
    }
}
module.exports = new AdsanphamModel();