const AdkhachhangModel = require("../models/AdkhachhangModel");
const conn = require('../models/config/connect');

class AdkhachhangController{
    //[GET] /admin/khachhang
    khachhang(req, res, next){

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }

        let loadKH = [];
        AdkhachhangModel.loadKhachHang().then(result =>{
        loadKH = result;
        res.render('admin/adkhachhang/khachhang',{
            title: 'khachhang',
            khachhang: loadKH,
            role: req.cookies.admin.id_maloainv,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        })

        }).catch(err =>{
            res.render('admin/home/index',{
                title: 'khachhang',
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        })
    }

    getOrderByCustomerId(req, res){
        let idcustomer = req.query.id;

        AdkhachhangModel.getOrderByCustomerId(idcustomer).then(function(result){
            res.json(result);
        }).catch(function(error){
            res.json({mess: 'loi roi'});
        });
    }
}



module.exports = new AdkhachhangController();