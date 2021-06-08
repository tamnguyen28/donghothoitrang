const dangnhapModel = require("../models/DangNhapModel");
const dangkyModel = require("../models/DangKyModel");

class DangNhapController {
  dangnhap(req, res) {
    res.render("client/dangnhap/dangnhap", { title: "Đăng nhập", message: "" });
  }

  postLogin(req, res) {
    let tendangnhap = req.body.username;
    let matkhau = req.body.password;

    dangnhapModel
      .dangnhap(tendangnhap, matkhau)
      .then(function (result) {
        res.cookie("user", result);
        res.redirect("/");
      })
      .catch(function (err) {
        console.log(err);
        res.render("client/dangnhap/dangnhap", {
          title: "Đăng nhập",
          message: "Đăng nhập thất bại",
        });
      });
  }
    logout(req, res) {
        let user = req.cookies.user;
        res.cookie("user", user, { maxAge: 0 });
        res.redirect("/");
    }
    loginGoogle(req, res) {
        let khachhang = {
            tenkhachang: req.user.displayName,
            diachi: "",
            email: req.user.emails[0].value,
            sodienthoai: "",
            taikhoan: req.user.emails[0].value,
            matkhau: "",
            ptdangnhap: req.user.provider,
        }
        dangkyModel.checkKhachHangTonTai(khachhang).then(function (resultLength) {
            if(resultLength == 0){//chưa tồn tại
                dangkyModel.dangky(khachhang).then(function (result) {
                    res.cookie("user", req.user);
                    res.redirect("/");
                })
                .catch(function (error) {
                    console.log(error);
                    res.redirect("/");
                });
            }else{
                res.cookie("user", req.user);
                res.redirect("/");
            }
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    loginFacebook(req, res){
        let khachhangfb = {
            tenkhachang: req.user.displayName,
            diachi: "",
            email: "", 
            sodienthoai: "",
            taikhoan: req.user.id, 
            matkhau: "",
            ptdangnhap: req.user.provider,
        }
        dangkyModel.checkKhachHangTonTai(khachhangfb).then(function(resultLength){
            if(resultLength == 0){
                dangkyModel.dangky(khachhangfb).then(function (resultfb){
                   
                    res.cookie('user', req.user);
                
                     res.redirect('/');
                }).catch(function (error){
                    console.log(error);
                    res.redirect('/');
                })
            }else{
                res.cookie('user', req.user)
                res.redirect('/');
            }
        }).catch(function (error){
            console.log(error);
        })
    }
}
module.exports = new DangNhapController();
