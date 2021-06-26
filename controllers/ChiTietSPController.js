const chitietspModel = require('../models/ChiTietSPModel');
const homeModel = require('../models/HomeModel');
class ChiTietSPController {
    index(req, res) {

        let idProduct = req.query.id;

        chitietspModel.loadChitiet(idProduct).then(function (listct) {
            homeModel.loadloaisp().then(resultloai =>{
                res.render('client/chitietsp/chitietsp', {
                    title: 'Chi tiết sản phẩm',
                    indexct: listct,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang : []),
                    loai: resultloai,
                });
            }).catch(err =>{
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = new ChiTietSPController();