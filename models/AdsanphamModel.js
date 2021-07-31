const conn = require('./config/connect');

class AdsanphamModel {
    loadSanPham() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT sanpham.*, thuonghieu.tenth FROM sanpham 
            JOIN thuonghieu on sanpham.id_math = thuonghieu.math
            Where sanpham.isDelete = 0 ORDER BY masp ASC`;
            conn.query(sqlquery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
    loadAllSanPham(vitribatdau) {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT sanpham.*, thuonghieu.tenth FROM sanpham 
            JOIN thuonghieu on sanpham.id_math = thuonghieu.math
            Where sanpham.isDelete = 0 ORDER BY masp ASC limit ${vitribatdau},10`;
            conn.query(sqlquery, function (err, result) {
                // console.log(result);
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
            let b = {
                tensp: newSp.name, giatien: newSp.price, trangthai: newSp.status, hinhanh: newSp.image,
                id_math: newSp.trademark, id_maloai: newSp.type, mota: newSp.mota, isDelete: 0
            }
            conn.query('insert into sanpham SET ?', b, function (err, data) {
                if (err) throw err;
                resolve(data.insertId);
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

    //lấy id sanpham có hình ảnh trong bosuutap
    getImageProduct(idproduct) {
        return new Promise(function (resolve, reject) {
            let queryProduct = `Select * from bohinhanh where bohinhanh.id_masp = ?`;

            conn.query(queryProduct, [idproduct], function (err, result) {
                if (err) {
                    reject(err)
                } else {

                    resolve(result);
                }
            })
        })

    }

    updateSanPham(newSp) {
        return new Promise(function (resolve, reject) {
            conn.query(`UPDATE sanpham 
                        SET tensp = ?, giatien = ?, trangthai = ?, hinhanh = ?, id_math = ?, id_maloai = ?, mota = ? 
                        Where masp = ?`, [newSp.name, newSp.price, newSp.status, newSp.image, newSp.trademark,
            newSp.type, newSp.mota, newSp.masp], function (err, data) {
                if (err) throw err;
                resolve(data.insertId);
            });
        });
    }

    deleteSanPham(idsanpham) {
        return new Promise(function (resolve, reject) {
            let queryDelete = `UPDATE sanpham
                            SET isDelete = 1
                            WHERE masp = ?`;
            conn.query(queryDelete, [idsanpham], function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        })
    }

    //lấy ra đơn hàng có trong sanpham
    getOrderOfProduct(idsanpham) {
        return new Promise(function (resolve, reject) {
            let queryXoa = `SELECT * from sanpham JOIN chitiethoadon on sanpham.masp = chitiethoadon.masp
            JOIN hoadon on hoadon.mahd = chitiethoadon.mahd 
            where sanpham.masp = ? and hoadon.trangthai = 0`;
            conn.query(queryXoa, [idsanpham], function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
    //luu san pham vao bohinhanh
    insertCollectImag(newIdProduct, dataImage) {
        return new Promise(function (resolve, reject) {
            let insert = `Insert into bohinhanh values (NULL,?,?)`;
            let lengthImagas = dataImage.length;

            for (let i = 1; i < lengthImagas; i++) {
                conn.query(insert, [dataImage[i].filename, newIdProduct], function (error) {
                    if (error) {
                        // console.log(error);
                        reject(false);
                    }
                })
            }
            resolve(true);
        })
    }
    //thay đổi ảnh đã lưu trong bohinhanh
    updateCollectImag(newIdProductup, dataImageup, reusltImag) {
        return new Promise(function (resolve, reject) {
            let update = `update bohinhanh 
                          set bohinhanh.tenha = ?
                          where bohinhanh.id_masp = ? and bohinhanh.maha = ?`;

            let lengthImagas = dataImageup.length;
            let lengthCollectionImag = reusltImag.length;
            let j = 0;
            for (let i = 1; i < lengthImagas; i++) {
                conn.query(update, [dataImageup[i].filename, newIdProductup, reusltImag[j++].maha], function (error) {
                    if (error) {
                        console.log(error);
                        reject(false);
                    }
                })
            }

            resolve(true);

        })
    }
}
module.exports = new AdsanphamModel();