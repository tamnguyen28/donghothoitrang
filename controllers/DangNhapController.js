const dangnhapModel = require("../models/DangNhapModel");
const dangkyModel = require("../models/DangKyModel");

let isgotocart = 0;
let idsp = 0;
class DangNhapController {
  dangnhap(req, res) {
    isgotocart = req.query.isgotocart;
    idsp = req.query.id;
    res.render("client/dangnhap/dangnhap", { 
        title: "Đăng nhập", 
        message: "",
        idkh:0,
        tenkh: '',
        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )  
    });
  }

  postLogin(req, res) {
    let tendangnhap = req.body.username;
    let matkhau = req.body.password;
    
    dangnhapModel
      .dangnhap(tendangnhap, matkhau)
      .then(function (result) {
        res.cookie("user", result);
        if(isgotocart == 1){
            res.redirect(`/giohang?id=${idsp}`)
        }else{
            
            res.redirect(`/`);
        }   
      })
      .catch(function (err) {
        console.log(err);
        res.render("client/dangnhap/dangnhap", {
          title: "Đăng nhập",
          message: "Sai tên đăng nhập hoặc mật khẩu. Đăng nhập thất bại",
          idkh:0,
          tenkh: '',
          giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ) 
        });
      });
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

                    })
                    
                })
                .catch(function (error) {
                    console.log(error);
                    res.redirect("/");
                });
            }else{
               
                dangkyModel.getAccountByID(req.user.id).then(function(result){
                    console.log(result);
                    res.cookie("user", result);

                    if(isgotocart == 1){
                        res.redirect(`/giohang?id=${idsp}`)
                    }else{
                        res.redirect("/");
                    }   
                }).catch(function(error){

                })
                
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
                    res.cookie('user', {makh: resultfb});
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
                })
              
            }
        }).catch(function (error){
            console.log(error);
        })
    }
}
module.exports = new DangNhapController();
