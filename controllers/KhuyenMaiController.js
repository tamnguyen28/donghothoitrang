const khuyenmaiModel = require('../models/KhuyenMaiModel');

class KhuyenMaiController {
    index(req, res){
        khuyenmaiModel.loadsieusale().then(function(listsieusale){
            khuyenmaiModel.loadbanchay().then(function(listbc){
                khuyenmaiModel.loadhangdau().then(function(listhd){
                    res.render('client/khuyenmai/khuyenmai',{
                        title: 'Khuyến mãi',
                        indexss: listsieusale,
                        indexbc: listbc,
                        indexhd: listhd,
                        tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                        idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )
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