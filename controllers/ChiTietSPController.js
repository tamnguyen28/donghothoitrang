const chitietspModel = require('../models/ChiTietSPModel');

class ChiTietSPController {
    index(req, res) {

        let idProduct = req.query.id;

        chitietspModel.loadChitiet(idProduct).then(function (listct) {

            res.render('client/chitietsp/chitietsp', {
                title: 'Chi tiết sản phẩm',
                indexct: listct,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang : [])
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = new ChiTietSPController();