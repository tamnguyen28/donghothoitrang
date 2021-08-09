const AdsanphamModel = require('../models/AdsanphamModel');
const AdkhachhangModel = require('../models/AdkhachhangModel');
const AddonhangModel = require('../models/AddonhangModel');
class AdhomeController {
    //[GET] /
    index(req, res, next) {
        // console.log(req.cookies.admin);
        if(!req.cookies.admin){
            return res.redirect("/admin/login");
        }
        // console.log(req.cookies.admin.tennv);
        AdsanphamModel.loadSanPham().then(function(resultPage){
            AdkhachhangModel.loadKhachHang().then(function(result){
                AddonhangModel.loadDonHang().then(function(resultdh){
                    res.render('admin/home/index',{
                        title: 'admin',
                        roleAdmin: req.cookies.admin.id_maloainv,
                        role: req.cookies.admin.id_maloainv,
                        tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                        manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                        idnv: req.cookies.admin.manv,
                        tong: resultPage,
                        tongkh: result,
                        tongdh: resultdh
                    });
                }).catch(err => {
                    console.log(err);
                })
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }

}

module.exports = new AdhomeController();