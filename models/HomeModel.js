const conn = require('./config/connect');

class HomeModel {
    loadSanPham(){
        return new Promise(function (resolve, reject) {
            let sqlquery = 'SELECT * FROM sanpham limit 0,6';
            conn.query(sqlquery, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        });
    }

    loadSanPhamDealhot(){
        return new Promise(function (resolve, reject) {
            let sqlquerydeal = 'SELECT * FROM sanpham limit 6,6';
            conn.query(sqlquerydeal, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        
        });
    }
    loadSanPhamFeatured(){
        return new Promise(function (resolve, reject) {
            let sqlqueryfeature = 'SELECT * FROM sanpham limit 12,6';
            conn.query(sqlqueryfeature, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        
        });
    }
    loadSanPhamDrew(){
        return new Promise(function (resolve, reject) {
            let sqlquerydrew = 'SELECT * FROM sanpham limit 18,6';
            conn.query(sqlquerydrew, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        
        });
    }
    loadSanPhamWatch(){
        return new Promise(function (resolve, reject) {
            let sqlquerywatch = 'SELECT * FROM sanpham limit 24,12';
            conn.query(sqlquerywatch, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        
        });
    }
    loadSanPhamLatest(){
        return new Promise(function (resolve, reject) {
            let sqlquerylatest = 'SELECT * FROM sanpham limit 36,4';
            conn.query(sqlquerylatest, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        
        });
    }

    getProductBy(idproduct){
        return new Promise(function(resolve, reject){
            let query = `select sanpham.masp, sanpham.tensp, sanpham.hinhanh, sanpham.giatien, thuonghieu.tenth
                         from sanpham join thuonghieu on sanpham.id_math = thuonghieu.math where sanpham.masp = ?`;
            conn.query(query, [idproduct] ,function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result[0]);
                }
            })
        })
    }
}
module.exports = new HomeModel();
