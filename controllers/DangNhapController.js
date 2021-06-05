const dangnhapModel = require('../models/DangNhapModel');

class DangNhapController {

    dangnhap(req, res){
        res.render('client/dangnhap/dangnhap', {title: 'Đăng nhập', message: ''})
    }

    postLogin(req, res){
        let tendangnhap = req.body.username;
        let matkhau = req.body.password;

        dangnhapModel.dangnhap(tendangnhap, matkhau).then(function (result){
            res.cookie('user', result);
            res.redirect('/');
        }).catch(function (err){
            console.log(err);
            res.render('client/dangnhap/dangnhap',
            {title: 'Đăng nhập', message:'Đăng nhập thất bại'},
            );
        })
    }
    logout(req, res){
        let user =  req.cookies.user;
        res.cookie('user', user, {maxAge: 0});
        res.redirect('/');
    }

}
module.exports = new DangNhapController();