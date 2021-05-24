const conn = require('./config/connect');

class AdsanphamModel {
    loadSanPham() {
        return new Promise(function (resolve, reject) {
            let sqlquery = `SELECT * FROM sanpham ORDER BY masp DESC`;
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
            let b = { tensp: newSp.name, giatien: newSp.price, trangthai: newSp.status, hinhanh: newSp.image, id_math: newSp.trademark, id_maloai: newSp.type, mota: newSp.mota}
            conn.query('insert into sanpham SET ?', b, function (err, data) {
                if (err) throw err;
                resolve(true);
            });
        });
    }
}
module.exports = new AdsanphamModel();