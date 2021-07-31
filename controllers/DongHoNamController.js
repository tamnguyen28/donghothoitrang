const donghonamModel = require("../models/DongHoNamModel");
const thuonghieuModel = require("../models/ThuongHieuModel");
const homeModel = require('../models/HomeModel');

class DongHoNamController {
  
    index(req, res) {
        let page = req.query.page;
        let vitribatdaulay = (page - 1) * 8;
        let listnam = [];
        donghonamModel.loadAllSanPham().then((resultnam) => {
            listnam = resultnam;
            let soluongtrang  = listnam.length / 8;

            donghonamModel.loadspnam(vitribatdaulay).then(function(resultPage){
                thuonghieuModel.loadThuonghieu().then((resultTH) => {
                    thuonghieuModel.loadRandom().then((resultRD) => {
                        homeModel.loadloaisp().then((resultloai) => {
                            res.render('client/donghonam/donghonam', {
                                title: "Đồng hồ nam",
                                indexnam: resultPage,
                                indexTH: resultTH,
                                indexRD: resultRD,
                                isSearch: false,
                                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                                loai : resultloai,
                                pageNumber: Math.ceil(soluongtrang)
                            });
                        }).catch((err) => {
                            console.log(err);
                        });
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch(function(error){
                console.log(error);
            })
        }).catch((err) => {
            console.log(err);
            res.render('client/donghonam/donghonam');
        });
    }

    locgia(req, res){
        let minPrice = req.query.minPrice;
        let maxPrice = req.query.maxPrice;
       
        donghonamModel.locgia(minPrice, maxPrice, 1).then(function(result){
            let listnam = result;
            let soluongtrang  = listnam.length / 8;
            
            res.render('client/donghonam/donghonam', {
                title: "Đồng hồ nam",
                isSearch: true,
                indexnam: listnam,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                pageNumber: Math.ceil(soluongtrang)
            });
        }).catch(function(error){
            console.log(error);
        })
    }
}

module.exports = new DongHoNamController();
