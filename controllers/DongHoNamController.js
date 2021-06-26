const donghonamModel = require("../models/DongHoNamModel");
const thuonghieuModel = require("../models/ThuongHieuModel");
const homeModel = require('../models/HomeModel');

class DongHoNamController {
  
    index(req, res) {
        let listnam = [];
        donghonamModel.loadspnam().then((resultnam) => {
            listnam = resultnam;
            thuonghieuModel.loadThuonghieu().then((resultTH) => {
                thuonghieuModel.loadRandom().then((resultRD) => {
                    homeModel.loadloaisp().then((resultloai) => {
                        res.render('client/donghonam/donghonam', {
                            title: "Đồng hồ nam",
                            indexnam: resultnam,
                            indexTH: resultTH,
                            indexRD: resultRD,
                            tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                            idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                            loai : resultloai,
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
        }).catch((err) => {
            console.log(err);
            res.render('client/donghonam/donghonam');
        });
    }
}

module.exports = new DongHoNamController();
