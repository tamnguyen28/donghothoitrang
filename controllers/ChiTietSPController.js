const chitietspModel = require('../models/ChiTietSPModel');

let bl =[]
let chids = [];
class ChiTietSPController{
    index(req, res){

        let idProduct = req.query.id;

        chitietspModel.loadChitiet(idProduct).then(function(listct){
            chitietspModel.loadBinhLuan(idProduct).then(function(result){
                bl = result[0];
                chids = result[1];
                customFleid();
                res.render('client/chitietsp/chitietsp',{
                    title: 'Chi tiết sản phẩm',
                    indexct: listct,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )
                });
            })
        }).catch(err => {
            console.log(err);
        });
    }
}

function customFleid(){
    for(let i = 0; i < bl.length; i++){
        for(let j = 0; j < chids.length; j++){
            // bl[i].childsbl = chids[0];
        }
    }

//    console.log(bl);
}

module.exports = new ChiTietSPController();