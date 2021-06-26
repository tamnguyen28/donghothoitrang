const AdloaisanphamModel = require('../models/AdloaisanphamModel');
const conn = require('../models/config/connect');

class AdloaisanphamController{
    loaisanpham(req, res){

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }

        AdloaisanphamModel.loadLoaiSP().then(result =>{
            res.render('admin/adloaisanpham/loaisanpham',{
                title: 'loaisanpham',
                loaisanpham: result,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0
            });
        }).catch(err =>{
            res.render('admin/home/index');
        });
    }

    //[GET] /admin/loaisanpham/createLSP
    createLSP(req, res){
        res.render('admin/adloaisanpham/createLSP');
    }
    createloaisp(req, res){
        let tenloai = req.body['tenloai'];
        let newLSP = {
            name: tenloai,
        }
        AdloaisanphamModel.createLoaiSanPham(newLSP).then(result => {
            res.redirect('/admin/loaisanpham');
        }).catch(err => {
            res.render('/admin/home/index');
        });
    }

    deleteLSP(req, res){
        let idloaisp = req.query.id;
        AdloaisanphamModel.deleteloaisp(idloaisp).then(function(result){
            res.redirect('/admin/loaisanpham');
        }).catch(function(error){
            res,redirect('/admin/loaisanpham');
        })
    }

    updateLSP(req, res){
        let idloaiSP = req.query.id;
        AdloaisanphamModel.getLoaispById(idloaiSP).then(function(result){
            res.render('admin/adloaisanpham/updateLSP', {LoaiSP: result[0] });
        }).catch(function(err){

        });
    }
    updateloaisp(req, res){
        let maloai = req.body['maloai'];
        let tenloai = req.body['tenloai'];
        let newLSP ={
            maloai: maloai,
            name: tenloai,
        }
        AdloaisanphamModel.updateLoaisanpham(newLSP).then(result => {
            res.redirect('/admin/loaisanpham');
        }).catch(err => {
            res.render('/admin/home/index');
        })

    }
}

module.exports = new AdloaisanphamController()