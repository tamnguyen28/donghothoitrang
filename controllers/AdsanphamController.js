const AdsanphamModel = require("../models/AdsanphamModel");
const conn = require('../models/config/connect');

let oldFileName = null;
let oldSp = null; 
class AdsanphamController {
    //[GET] /admin
    index(req, res) {

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }
        let page = req.query.page;
        let vitribatdaulay = (page - 1) * 10;
        let listsp = [];

        let loadSP = [];
            AdsanphamModel.loadSanPham().then(resultPage => {
                listsp = resultPage;
                let soluongtrang = listsp.length / 10;
                AdsanphamModel.loadAllSanPham(vitribatdaulay).then(function(result){
                loadSP = result;
                res.render('admin/adsanpham/sanpham', {
                    title: 'sanpham',
                    sanpham: loadSP,
                    role: req.cookies.admin.id_maloainv,
                    mess: req.query.mess && req.query.mess == 1 ? req.query.mess : '',
                    tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                    manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                    idnv: req.cookies.admin.manv,
                    pageNumber: Math.ceil(soluongtrang)
                });
            }).catch((err)=>{
                console.log(err);
            });
    
            }).catch(err => {
                res.render('admin/home/index',{
                    title: 'sanpham',
                    role: req.cookies.admin.id_maloainv,
                    tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                    manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                    idnv: req.cookies.admin.manv
                });
            });
    }
    //[GET] /admin/sanpham/create
    create(req, res, next) {
        AdsanphamModel.loadDanhMuc().then(function (result) {

            AdsanphamModel.loadThuongHieu().then(function (resulttt) {
                res.render('admin/adsanpham/create', { 
                    danhmucs: result, thuonghieus: resulttt,
                    role: req.cookies.admin.id_maloainv,
                    tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                    manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                    idnv: req.cookies.admin.manv
                });
            }).catch(function (err) {

            });
        }).catch(function (err) {

        });
    }
    //[POST] /admin/sanpham/store (create)
    store(req, res) {
        let tensp = req.body['tensp'];
        let giatien = req.body['giatien'];
        let trangthai = req.body['trangthai'];
        let hinhanh = req.files[0].filename;
        let mota = req.body['mota'];
        let thuonghieu = req.body['id_math'];
        let loaisanpham = Number(req.body['id_maloai']);
        let newSp = {
            name: tensp,
            price: giatien,
            status: trangthai,
            image: hinhanh,
            mota: mota,
            trademark: thuonghieu,
            type: loaisanpham
        }
        // console.log(hinhanh);
        let createSP = [];
        AdsanphamModel.createSanPham(newSp).then(resultProduct => {
            AdsanphamModel.insertCollectImag(resultProduct,req.files).then(function(result){
                res.redirect('/admin/sanpham?page=1');
            }).catch(function(error){

            })
            
        }).catch(err => {
            // console.log(err);
            res.render('/admin');
        });
    }

    //[GET] /admin/sanpham/update
    update(req, res, next) {
        let idsanpham = req.query.id;
        AdsanphamModel.getProductById(idsanpham).then(function (result) {
            AdsanphamModel.loadThuongHieu().then(function (resulttt) {
                AdsanphamModel.loadDanhMuc().then(function (resultdm) {
                    AdsanphamModel.getImageProduct(idsanpham).then(function(resultBohinhanh){
                        oldFileName = result[0].hinhanh
                        oldSp = result;
                       
                        res.render('admin/adsanpham/update', {
                            product: result[0], thuonghieus: resulttt, danhmucs: resultdm,
                            role: req.cookies.admin.id_maloainv,
                            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                            idnv: req.cookies.admin.manv,
                            bohinhanh:resultBohinhanh
                        });
                    }).catch(function(error){

                    })
                   
                })
            }).catch(function (erro) {

            })
        }).catch(function (err) {

        });
    }
    // [POST] /admin/sanpham/store (update)
     storeupdate(req, res) {
        let masp = req.body['masp'];
        let tensp = req.body['tensp'];
        let giatien = Number(req.body['giatien']);
        let trangthai = Number(req.body['trangthai']);
        let hinhanh = (req.files[0] ? req.files[0].filename: oldFileName);
        let mota = req.body['mota'];
        let thuonghieu = Number(req.body['id_math']);
        let loaisanpham = req.body['id_maloai'] == -1 ? oldSp[0].id_maloai : req.body['id_maloai'] ;
            
        let newSp = {
            masp: masp,
            name: tensp,
            price: giatien,
            status: trangthai,
            image: hinhanh,
            mota: mota,
            trademark: thuonghieu,
            type: loaisanpham
        }
        AdsanphamModel.updateSanPham(newSp).then(resultProduct => {
            AdsanphamModel.getImageProduct(masp).then(function(reusltImag){
                AdsanphamModel.updateCollectImag(masp,req.files,reusltImag).then(function(result){
                    res.redirect('/admin/sanpham?page=1');
                }).catch(function(error){
                    console.log(error);
                })
            }).catch(function(error){

            })
            
        }).catch(err => {
            res.render('/admin');
        });
    }

    deleteSanpham(req, res){
        let idsanpham = req.query.id;
        AdsanphamModel.getOrderOfProduct(idsanpham).then(function(result){
            if(result.length == 0){
                AdsanphamModel.deleteSanPham(idsanpham).then(function(resultDeleteProduct){
                    res.redirect('/admin/sanpham');
                }).catch(function(error){
                    res.redirect('/admin/sanpham');
                })
            }else{
                res.redirect('/admin/sanpham?mess=1');
            }
        }).catch(function(error){
           
        })
        
    }
}

module.exports = new AdsanphamController();