const canhanModel = require('../models/CaNhanModel');
const homeModel = require('../models/HomeModel');
const md5 = require("md5");
class CaNhanController {

    canhan(req, res){
        let makh = req.query.idkh;
        let message = req.query.mess ? req.query.mess: '' ; 
       
        canhanModel.getKhachHangById(makh).then(function(result){
            homeModel.loadloaisp().then(resultloai =>{
                // console.log(result);
                res.cookie("user", result);
                res.render('client/canhan/canhan', {
                    title: 'Quản lý tài khoản',
                    customer: result,
                    tenkh: result.tenkh,
                    idkh : makh,
                    mess: message,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    loai: resultloai,  
                });
            }).catch(err =>{
                console.log(err);
            })
        }).catch(function(error){
            res.render('client/canhan/canhan', {
                title: 'Quản lý tài khoản',
                customer: null,
                idkh : makh,
                mess: 0,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )  
            });
        })
    }

    saveKhachhang(req, res){
        let kh = {
            makh: req.body.idkh,
            tenkhachang: req.body.name, 
            diachi: req.body.address,
            email: req.body.email,
            sodienthoai: req.body.phone,
        };
        canhanModel.updateKhachHang(kh).then(function(result){
            res.redirect(`/canhan?idkh=${kh.makh}&mess=1`);
        }).catch(function(err){
            console.log(err);
            res.redirect(`/canhan?idkh=${kh.makh}&mess=0`);
        })
    }

    //Đổi mật khẩu
    doimatkhau(req, res){
        let makh = req.query.idkh;
        let message = req.query.mess ? req.query.mess: '' ; 
        canhanModel.getKhachHangById(makh).then(function(result){
            homeModel.loadloaisp().then(resultloai =>{
                res.render('client/canhan/doimatkhau',{
                    title: "Đổi mật khẩu",
                    loai: resultloai,  
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    idkh: req.cookies.user.makh,
                    mess: ''
                });
            }).catch(err => {
                console.log(err);
            })  
        }).catch(err =>{
            console.log(err);
        })
    }

    doimatkhauPost(req, res){
        let oldpass = md5(req.body.mkcu);
        let newPass = md5(req.body.mkmoi);
        let idkhachhang = req.cookies.user.makh;

        if(oldpass != newPass){
            canhanModel.checkOldPassword(oldpass, idkhachhang).then(function(result){
                if(result == true){
                    canhanModel.updateNewPass(newPass, idkhachhang).then(function(result){
                        homeModel.loadloaisp().then(resultloai =>{
                            res.render('client/canhan/doimatkhau',{
                                title: "Đổi mật khẩu",
                                loai: resultloai,
                                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                                idkh: req.cookies.user ? req.cookies.user.makh: 0 ,
                                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                                idkh: req.cookies.user.makh,
                                mess: 'Đổi mật khẩu thành công'
                            });
                        }).catch(err =>{
                            console.log(err);
                        })
                        
                    }).catch(function(error){
                        res.render('client/canhan/doimatkhau',{
                            title: "Đổi mật khẩu",
                            loai: resultloai,
                            idkh: req.cookies.user.makh,
                            mess: 'Mật khẩu cũ không đúng'
                        });   
                    });
                }else{
                    res.render('client/canhan/doimatkhau',{
                        title: "Đổi mật khẩu",
                        loai: resultloai,
                        idkh: req.cookies.user.makh,
                        mess: 'Mật khẩu cũ không đúng'
                    });   
                }
            }).catch(function(){
                homeModel.loadloaisp().then(resultloai =>{
                    res.render('client/canhan/doimatkhau',{
                        title: "Đổi mật khẩu",
                        loai: resultloai,
                        tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                        idkh: req.cookies.user ? req.cookies.user.makh: 0 ,
                        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                        idkh: req.cookies.user.makh,
                        mess: 'Mật khẩu cũ không đúng'
                    });  
                }).catch(err =>{
                    console.log(err);
                })
                 
            })
        }else{
            homeModel.loadloaisp().then(resultloai =>{
                res.render('client/canhan/doimatkhau',{
                    title: "Đổi mật khẩu",
                    loai: resultloai,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh: req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    idkh: req.cookies.user.makh,
                    mess: 'Mật khẩu cũ không được trùng mật khẩu mới'
                });
            })  
        }
    }
}

module.exports = new CaNhanController();