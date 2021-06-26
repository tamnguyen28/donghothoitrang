const lichsumuahangModel = require('../models/LichSuMuaHangModel');

class LichSuMuaHangController{
    index(req, res){
        if (!req.cookies.user) { 
           return res.redirect(`/dangnhap?isgotoLog=2`);
        }
        
        let list = [];
        lichsumuahangModel.loadDonhang(req.cookies.user.makh).then(result =>{
            list = result;
            res.render('client/lichsumuahang/lichsumuahang', {
                donhang : list,
                title : 'Lịch sử mua hàng',
                idkh: req.cookies.user ? req.cookies.user.makh: 0,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

module.exports = new LichSuMuaHangController();