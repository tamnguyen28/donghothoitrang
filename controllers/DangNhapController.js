const dangnhapModel = require("../models/DangNhapModel");
const dangkyModel = require("../models/DangKyModel");
const e = require("express");

let isgotocart = 0;
let idsp = 0;
let isgotoLog = 0;

class DangNhapController {
  dangnhap(req, res) {
    isgotocart = req.query.isgotocart;
    isgotoLog = req.query.isgotoLog;
    idsp = req.query.id;
    let mess = req.query.mess;
    
    res.render("client/dangnhap/dangnhap", { 
        title: "Đăng nhập", 
        mess: mess ? mess : -1,
        idkh:0,
        tenkh: '',
        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ), 
    });
  }

  postLogin(req, res) {
    let tendangnhap = req.body.username;
    let matkhau = req.body.password;
    
    dangnhapModel.dangnhap(tendangnhap, matkhau).then(function (result) {
        res.cookie("user", result);
        if(isgotocart == 1){
            return res.redirect(`/giohang?id=${idsp}`)
        } 
        if(isgotoLog == 2){
           return res.redirect(`/lichsumuahang`);
        }
        res.redirect(`/`);
      }).catch(function (err) {
        console.log(err);
        res.redirect('/dangnhap?mess=0');
      })
  }
    logout(req, res) {
        if(req.session.giohang){
            req.session.giohang = [];
        }
        let user = req.cookies.user;
        res.cookie("user", user, { maxAge: 0 });
        res.redirect("/");
    }
    loginGoogle(req, res) {
        let khachhang = {
            id:req.user.id,
            tenkhachang: req.user.displayName,
            diachi: "",
            email: req.user.emails[0].value,
            sodienthoai: "",
            taikhoan: req.user.id,
            matkhau: "",
            ptdangnhap: req.user.provider,
        }
        dangkyModel.checkKhachHangTonTai(khachhang).then(function (resultLength) {
            if(resultLength == 0){//chưa tồn tại
                dangkyModel.dangky(khachhang).then(function (result) {
                    console.log(req.user.id);
                    dangkyModel.getAccountByID(khachhang.id).then(function(resultCustomer){
                        res.cookie("user",resultCustomer);
                        // console.log(isgotocart);
                        if(isgotocart == 1){
                            res.redirect(`/giohang?id=${idsp}`)
                        }else{
                            res.redirect("/");
                        }   
                    }).catch(function(error){
                        console.log(error);
                    });
                }).catch(function (error) {
                    console.log(error);
                    res.redirect("/");
                });
            }else{
                dangkyModel.getAccountByID(req.user.id).then(function(result){
                    // console.log(result);
                    res.cookie("user", result);

                    if(isgotocart == 1){
                        res.redirect(`/giohang?id=${idsp}`)
                    }else{
                        res.redirect("/");
                    }   
                }).catch(function(error){
                    console.log(error);
                });
            }
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    loginFacebook(req, res){
        let khachhangfb = {
            id:req.user.id,
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
                    res.cookie('user', resultfb);
                    if(isgotocart == 1){
                        res.redirect(`/giohang?id=${idsp}`)
                    }else{
                        res.redirect("/");
                    } 
                }).catch(function (error){
                    console.log(error);
                    res.redirect('/');
                })
            }else{
                dangkyModel.getAccountByID(req.user.id).then(function(result){
                    res.cookie('user', result)
                    if(isgotocart == 1){
                        res.redirect(`/giohang?id=${idsp}`)
                    }else{
                        res.redirect("/");
                    }   
                }).catch(function(error){
                    console.log(error);
                });
            }
        }).catch(function (error){
            console.log(error);
        });
    }   
}
module.exports = new DangNhapController();
