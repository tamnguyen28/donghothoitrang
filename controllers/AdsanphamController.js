const AdsanphamModel = require("../models/AdsanphamModel");
const conn = require('../models/config/connect');

class AdsanphamController {
    //[GET] /admin
    index(req, res,next) {
        let loadSP = [];
        AdsanphamModel.loadSanPham().then(result =>{
            loadSP = result;
            res.render('admin/adsanpham/sanpham',{
                title: 'sanpham',
                sanpham : loadSP})

        }).catch(err =>{
            console.log(err);
            res.render('admin/home/index');
        });
    }
    //[GET] /admin/sanpham/create
    create(req,res,next){
        AdsanphamModel.loadDanhMuc().then(function(result){
            
            AdsanphamModel.loadThuongHieu().then(function(resulttt){
                res.render('admin/adsanpham/create',{danhmucs: result,thuonghieus: resulttt});
            }).catch(function(err){
    
            });   
        }).catch(function(err){
            
        });
            
    }
    //[POST] /admin/sanpham/store
    store(req,res){
        let tensp = req.body['tensp'];
        let giatien = req.body['giatien'];
        let trangthai = req.body['trangthai'];
        console.log( req.file.filename);
        let hinhanh = req.file.filename;
        let mota = req.body['mota'];
        let thuonghieu =req.body['id_math'];
        let loaisanpham = Number(req.body['id_maloai']);
        let newSp = {
            name: tensp,
            price: giatien,
            status: trangthai,
            image: hinhanh,
            mota: mota,
            trademark: thuonghieu,
            type:loaisanpham
        }
        let createSP = [];
        AdsanphamModel.createSanPham(newSp).then(result =>{
            res.redirect('/admin/sanpham');
        }).catch(err =>{
            console.log(err);
            res.render('/admin');
        });
        
    }
    
}

module.exports = new AdsanphamController();