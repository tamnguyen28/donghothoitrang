const dangkyModel = require('../models/DangKyModel');
class DangKyController {

    dangky(req, res){
        res.render('client/dangky/dangky', {
            title: 'dang ky',
            tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
            idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )  
        });
    }

    saveKhachhang(req, res){
        let khachhang = {
            tenkhachang: req.body.name, 
            diachi: req.body.address,
            email: req.body.email,
            sodienthoai: req.body.phone,
            taikhoan: req.body.username,
            matkhau:req.body.password,
        };
        dangkyModel.dangky(khachhang).then(function(result){
            res.redirect('/?mess=1');
        }).catch(function(err){
            console.log(err);
            res.redirect('/dangky');
        })
    }

}

module.exports = new DangKyController();