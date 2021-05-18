const AdsanphamModel = require("../models/AdsanphamModel");
const conn = require('../models/config/connect');

class AdsanphamController {
    //[GET] /
    index(req, res) {
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
}

module.exports = new AdsanphamController();