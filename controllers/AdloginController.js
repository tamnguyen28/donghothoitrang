const AdloginModel = require('../models/AdloginModel');

class AdloginController {
    login(req, res) {
      res.render('admin/adlogin/login',{
        title: 'Đăng nhập',
        message:'',
    });
    }

    postLogin(req, res) {
      let tennv = req.body.username;
      let matkhau = req.body.password;

      AdloginModel
        .login(tennv, matkhau)
        .then(function (result) {
          res.cookie('admin',result);
          res.redirect('/admin');
        })
        .catch(function (err) {
          res.render('admin/adlogin/login', {title:'Đăng nhập', message: "Tài khoản không hợp lệ" });
        });
    }

    logout(req, res){
      let admin = req.cookies.admin;
      res.cookie('admin', admin, {maxAge: 0 });
      res.redirect('/admin');
    }

}

module.exports = new AdloginController();
