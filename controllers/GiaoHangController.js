const giaohangModel = require('../models/GiaoHangModel');
const homeModel = require("../models/HomeModel");

class GiaoHangController{
    index(req, res){
        homeModel.loadloaisp().then(resultloai =>{
            res.render('client/giaohang/giaohang', {
                title: 'Giao hàng',
                loai: resultloai,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
            });
        }).catch(err =>{
            console.log(err);
        })
    }
}

module.exports = new GiaoHangController();