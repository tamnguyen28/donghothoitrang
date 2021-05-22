const thuonghieuModel = require('../models/ThuongHieuModel');

class ThuongHieuController {

    index(req, res){
        let listTH = [];
        thuonghieuModel.loadThuonghieu().then((resultTH) => {
            listTH = resultTH;
            thuonghieuModel.loadSPThuonghieu().then((resultSP) => {
                let listSP = resultSP;
                thuonghieuModel.loadRandom().then((resultRD)=>{
                    let listRD = resultRD;
                    res.render('client/thuonghieu/thuonghieu', {
                        title: 'Thương Hiệu',
                        indexRD: listRD,
                        indexSP: listSP,
                        indexTH: listTH,
                    })
                }).catch(err => {
                    console.log(err);
                })

            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
            res.render('client/thuonghieu/thuonghieu');
        })
    }
}

module.exports = new ThuongHieuController();
