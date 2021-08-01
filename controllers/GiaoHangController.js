const giaohangModel = require('../models/GiaoHangModel');

class GiaoHangController{
    index(req, res){
        res.render('client/giaohang/giaohang', {
            title: 'Giao hàng',
            tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
            idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
        });
    }
}

module.exports = new GiaoHangController();