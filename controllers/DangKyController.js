const dangkyModel = require('../models/DangKyModel');
class DangKyController {

    dangky(req, res){
        res.render('client/dangky/dangky', {title: 'dang ky'})
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
            res.redirect('/');
        }).catch(function(err){
            console.log(err);
            res.redirect('/dangky');
        })
    }

}

module.exports = new DangKyController();