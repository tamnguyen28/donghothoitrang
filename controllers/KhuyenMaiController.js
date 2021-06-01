const khuyenmaiModel = require('../models/KhuyenMaiModel');

class KhuyenMaiController {
    index(req, res){
        let listsieusale = [];
        khuyenmaiModel.loadsieusale().then(function(resultss){
            listsieusale = resultss;
            khuyenmaiModel.loadbanchay().then(function(resultbc){
                let listbc = resultbc;
                khuyenmaiModel.loadhangdau().then(function(resulthd){
                    let listhd = resulthd;
                    res.render('client/khuyenmai/khuyenmai',{
                        title: 'Khuyến mãi',
                        indexss: listsieusale,
                        indexbc: listbc,
                        indexhd: listhd,
                    });
                }).catch(err => {
                    console.log(err);
                })
            }).catch(err => {
                console.log(err);
            });
        }).catch(err =>{
            console.log(err);
            res.render('client/khuyenmai/khuyenmai');
        });
    }
}

module.exports = new KhuyenMaiController();