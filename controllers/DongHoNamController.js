const donghonamModel = require("../models/DongHoNamModel");
const thuonghieuModel = require("../models/ThuongHieuModel");

class DongHoNamController {
  
    index(req, res) {
        let listnam = [];
        donghonamModel.loadspnam().then((resultnam) => {
            listnam = resultnam;
            thuonghieuModel.loadThuonghieu().then((resultTH) => {
                thuonghieuModel.loadRandom().then((resultRD) => {
                    res.render('client/donghonam/donghonam', {
                        title: "Đồng hồ nam",
                        indexnam: resultnam,
                        indexTH: resultTH,
                        indexRD: resultRD,
                        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )
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
