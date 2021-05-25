const donghonuModel = require("../models/DongHoNuModel");
const thuonghieuModel = require("../models/ThuongHieuModel");

class DongHoNuController {
  
    index(req, res) {
        let listnu = [];
        donghonuModel.loadspnam().then((resultnu) => {
            listnu = resultnu;
            thuonghieuModel.loadThuonghieu().then((resultTH) => {
                thuonghieuModel.loadRandom().then((resultRD) => {
                    res.render('client/donghonu/donghonu', {
                        title: "Đồng hồ nữ",
                        indexnu: resultnu,
                        indexTH: resultTH,
                        indexRD: resultRD,
                    });
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
