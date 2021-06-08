const thuonghieuModel = require('../models/ThuongHieuModel');

let listThtemp = []
let listRDtemp = []
class ThuongHieuController {

    index(req, res){
        thuonghieuModel.loadThuonghieu().then((listTH) => {
            listThtemp = listTH;
                thuonghieuModel.loadRandom().then((listRD)=>{
                    listRDtemp = listRD;
                    res.render('client/thuonghieu/thuonghieu', {
                        title: 'Thương Hiệu',
                        indexRD: listRD,
                        indexTH: listTH,
                        indexSP: [],
                        motatt:'',
                        hinhanh: '',
                        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )
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
            thuonghieuModel.getTransmarkById(idTranmark).then(function(result1){
                    res.render('client/thuonghieu/thuonghieu', {
                        indexSP: result , title: 'Thương Hiệu', 
                        indexTH: listThtemp, indexRD: listRDtemp, 
                        motatt: result1[0].chitiet,
                        hinhanh: result1[0].hinhanh
                    });
            }).catch(function(error){
                console.log(error);
            })   
        }).catch(function(error){
            res.render('client/thuonghieu/thuonghieu', {indexSP: []});
        });
    }
}

module.exports = new ThuongHieuController();
