const AdthuonghieuModel = require('../models/AdthuonghieuModel');
const conn = require('../models/config/connect');

let oldFileName = null;
class AdthuonghieuController{
    thuonghieu(req, res){

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }
        let loadTH = [];
        AdthuonghieuModel.loadThuongHieu().then(result =>{
            loadTH = result;
            res.render('admin/adthuonghieu/thuonghieu',{
                title: 'thuonghieu ',
                thuonghieu: loadTH,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        }).catch(err =>{
            res.render('admin/home/index', {
                title: 'thuonghieu',
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        });
    }
    //[GET] /admin/thuonghieu/createthuonghieu
    createthuonghieu(req, res){
        res.render('admin/adthuonghieu/createthuonghieu',{
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        });
    }
    // [POST] /admin/thuonghieu/createThuongHieu
    createThuongHieu(req, res) {
        let tenth = req.body['tenth'];
        let hinhanh = req.file.filename;
        let chitiet = req.body['chitiet'];
        let newTh = {
            name: tenth,
            image: hinhanh,
            chitiet: chitiet,
        }
        AdthuonghieuModel.createTH(newTh).then(result => {
            res.redirect('/admin/thuonghieu');
        }).catch(err => {
            // console.log(err);
            res.render('/admin/home/index');
        });
    }
    //[GET] /admin/tintuc/updateblog
    updatethuonghieu(req, res, next){
        let idthuonghieu = req.query.id;
        AdthuonghieuModel.getTrademarkById(idthuonghieu).then(function(result){
            oldFileName = result[0].hinhanh
            res.render('admin/adthuonghieu/updatethuonghieu', { 
                trademark: result[0],
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        }).catch(function(err){

        });
    }

    //[POST] /admin/tintuc/updatetintuc
    updatetrademark(req, res, next){
        let math = req.body['math'];
        let tenth = req.body['tenth'];
        let chitiet = req.body['chitiet'];
        let hinhanh =  (req.file ? req.file.filename: oldFileName);
        let newTh = {
            math: math,
            name: tenth,
            chitiet: chitiet,
            image: hinhanh,
        }
        AdthuonghieuModel.updateTrademark(newTh).then(result => {
            res.redirect('/admin/thuonghieu');
        }).catch(err => {
            res.render('/admin/home/index');
        });
    }
    
    deletetrademark(req, res){
        let idthuonghieu = req.query.id;

        AdthuonghieuModel.deleteTrademark(idthuonghieu).then(function(result){
            res.redirect('/admin/thuonghieu');
        }).catch(function(error){
            res.redirect('/admin/thuonghieu');
        });
    }
}

module.exports = new AdthuonghieuController()