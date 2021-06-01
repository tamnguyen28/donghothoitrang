const AdloginModel = require('../models/AdloginModel');

class AdloginController {
  login(req, res) {
    res.render('admin/adlogin/login',{title: 'Đăng nhập', message:''});
  }

  postLogin(req, res) {
    let tennv = req.body.username;
    let matkhau = req.body.password;

    AdloginModel
      .login(tennv, matkhau)
      .then(function (result) {
        res.redirect('/admin/sanpham');
      })
      .catch(function (err) {
        res.render('admin/adlogin/login', {title:'Đăng nhập', message: "SAI MẬT KHẨU: Đăng nhập thất bại" });
      });
  }
}

module.exports = new AdloginController();
