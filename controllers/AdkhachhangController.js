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
            khachhang: loadKH})

        }).catch(err =>{
            res.render('admin/home/index');
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