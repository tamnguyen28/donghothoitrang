const AdsanphamModel = require("../models/AdsanphamModel");
const conn = require('../models/config/connect');

let oldFileName = null;
let oldSp = null; 
class AdsanphamController {
    //[GET] /admin
    index(req, res, next) {
            
        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }

        let loadSP = [];
        AdsanphamModel.loadSanPham().then(result => {
            loadSP = result;
            // console.log(req.cookies.admin.id_maloainv);
            res.render('admin/adsanpham/sanpham', {
                title: 'sanpham',
                sanpham: loadSP,
                role: req.cookies.admin.id_maloainv,
                mess: req.query.mess && req.query.mess == 1 ? req.query.mess : '',
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            })

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
        let hinhanh = req.file.filename;
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
        // let createSP = [];
        AdsanphamModel.createSanPham(newSp).then(result => {
            res.redirect('/admin/sanpham');
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
                    oldFileName = result[0].hinhanh
                    oldSp = result;
                    res.render('admin/adsanpham/update', {
                        product: result[0], thuonghieus: resulttt, danhmucs: resultdm,
                        tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                        manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                        idnv: req.cookies.admin.manv
                    });
                })
            }).catch(function (erro) {

            })
        }).catch(function (err) {

        });
    }
    // [POST] /admin/sanpham/store
     storeupdate(req, res) {
        let masp = req.body['masp'];
        let tensp = req.body['tensp'];
        let giatien = Number(req.body['giatien']);
        let trangthai = Number(req.body['trangthai']);
        let hinhanh = (req.file ? req.file.filename: oldFileName);
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
        AdsanphamModel.updateSanPham(newSp).then(result => {
            res.redirect('/admin/sanpham');
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