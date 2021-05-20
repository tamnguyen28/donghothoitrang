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
            res.render('admin/adsanpham/create',{danhmucs: result});
        }).catch(function(err){
            
        });
        AdsanphamModel.loadThuongHieu().then(function(result){
            res.render('admin/adsanpham/create',{thuonghieus: result});
        }).catch(function(err){

        });       
    }
    //[POST] /admin/sanpham/store
    store(req,res,next){
        let tensp = req.body['tensp'];
        let giatien = req.body['giatien'];
        let trangthai = req.body['trangthai'];
        let hinhanh = req.body['hinhanh'];
        let thuonghieu =req.body['id_math'];
        let loaisanpham = Number(req.body['id_maloai']);
        let newSp = {
            name: tensp,
            price: giatien,
            status: trangthai,
            image: hinhanh,
            trademark: thuonghieu,
            type:loaisanpham
        }
        let createSP = [];
        AdsanphamModel.createSanPham(newSp).then(result =>{
            createSP = result;
            res.render('admin/adsanpham/sanpham',{
                title: 'themsanpham',
                create : createSP})

        }).catch(err =>{
            console.log(err);
            res.render('admin/home/index');
        });
        
    }
}

module.exports = new AdsanphamController();