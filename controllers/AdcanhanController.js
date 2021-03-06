const AdcanhanModel = require('../models/AdcanhanModel');
const md5 = require('md5');
const conn = require('../models/config/connect');

class AdcanhanController {
    //[GET] /admin/nhanvien
    canhan(req, res) {
        let manv = req.cookies.admin.manv;
        let message = req.query.mess ? req.query.mess : '';
        AdcanhanModel.getCanhanById(manv).then(function (result) {
            // console.log(result);
            res.cookie('admin', result)

            res.render('admin/adcanhan/canhan', {
                title: 'Quản lý tài khoản',
                nhanvien: result,
                tennv: result.tennv,
                idnv: manv,
                mess: message,
                role: req.cookies.admin.id_maloainv,
                manv: req.cookies.admin ? req.cookies.admin.manv : 0
            });
        }).catch(function (error) {
            res.render('admin/adcanhan/canhan', {
                title: 'Quản lý tài khoản',
                nhanvien: null,
                idnv: manv,
                mess: 0,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv : 0
            });
        })
    }
    //luu thong tin ca nhan
    saveCanhan(req, res) {
        let nv = {
            manv: req.body.idnv,
            tennhanvien: req.body.name,
            email: req.body.email,
            sodienthoai: req.body.phone,
        };
        // console.log(nv);
        AdcanhanModel.updateCanhan(nv).then(function (result) {
            res.redirect(`/admin/canhan?idnv=${nv.manv}&mess=1`);
        }).catch(function (err) {
            // console.log(err);
            res.redirect(`/admin/canhan?idnv=${nv.manv}&mess=0`);
        })
    }
    //load ra trang doi mat khau
    doimatkhau(req, res) {
        let mess =``;
        
        if(req.query.mess && req.query.mess == 2){
            mess = 'Đổi mật khẩu thành công'
        }else if(req.query.mess && req.query.mess == 3){
            mess = 'Mật khẩu cũ không đúng'
        }else if(req.query.mess && req.query.mess == 4){
            mess = 'Mật khẩu cũ không được trùng mật khẩu mới'
        }

        res.render('admin/adcanhan/doimatkhau', {
            title: "Đổi mật khẩu",
            mess: mess,
            role: req.cookies.admin.id_maloainv,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv : 0,
            idnv: req.cookies.admin.manv
        });
    }

    doimatkhauPost(req, res) {
        let oldpass = md5(req.body.mkcu);
        let newPass = md5(req.body.mkmoi);
        let idnhanvien = req.cookies.admin.manv;

        if (oldpass != newPass) {
            AdcanhanModel.checkOldPassword(oldpass, idnhanvien).then(function (result) {
                if (result == true) {
                    AdcanhanModel.updateNewPass(newPass, idnhanvien).then(function (result) {
                        res.redirect('/admin/canhan/doimatkhau?mess=2');
                    }).catch(function (error) {
                        res.redirect('/admin/canhan/doimatkhau?mess=3');
                    });
                }else {
                    res.redirect('/admin/canhan/doimatkhau?mess=3');
                }
            }).catch(function () {
                res.redirect('/admin/canhan/doimatkhau?mess=3');
            });
        }else {
            res.redirect('/admin/canhan/doimatkhau?mess=4');
        }
    }
}
module.exports = new AdcanhanController();