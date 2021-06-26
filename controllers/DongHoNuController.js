const donghonuModel = require("../models/DongHoNuModel");
const thuonghieuModel = require("../models/ThuongHieuModel");
const homeModel = require("../models/HomeModel");
class DongHoNuController {
  
    index(req, res) {
        let listnu = [];
        donghonuModel.loadspnam().then((resultnu) => {
            listnu = resultnu;
            thuonghieuModel.loadThuonghieu().then((resultTH) => {
                thuonghieuModel.loadRandom().then((resultRD) => {
                    homeModel.loadloaisp().then(resultloai => {
                        res.render('client/donghonu/donghonu', {
                            title: "Đồng hồ nữ",
                            indexnu: resultnu,
                            indexTH: resultTH,
                            indexRD: resultRD,
                            tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                            idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                            loai : resultloai,
                        });
                    }).catch(err =>{
                        console.log(err);
                    })
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
            res.render('client/donghonu/donghonu');
        });
    }
}

module.exports = new DongHoNuController();
