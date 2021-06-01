const thuonghieuModel = require('../models/ThuongHieuModel');

let listThtemp = []
let listRDtemp = []
class ThuongHieuController {

    index(req, res){
        let listTH = [];
        thuonghieuModel.loadThuonghieu().then((resultTH) => {
            listTH = resultTH;
            listThtemp = listTH;
                thuonghieuModel.loadRandom().then((resultRD)=>{
                    let listRD = resultRD;
                    listRDtemp = listRD;
                    res.render('client/thuonghieu/thuonghieu', {
                        title: 'Thương Hiệu',
                        indexRD: listRD,
                        indexTH: listTH,
                        indexSP: []
                    })
                }).catch(err => {
                    console.log(err);
                })
        }).catch(err => {
            console.log(err);
            res.render('client/thuonghieu/thuonghieu');
        })
    }

    getProductByTranmarkId(req, res){
        let idTranmark = req.query.id;

        thuonghieuModel.loadProductByTranmarkId(idTranmark).then(function(result){
            res.render('client/thuonghieu/thuonghieu', {indexSP:result , title: 'Thương Hiệu', indexTH: listThtemp, indexRD:listRDtemp });
        }).catch(function(error){
            res.render('client/thuonghieu/thuonghieu', {indexSP: []});
        });
    }
}

module.exports = new ThuongHieuController();
