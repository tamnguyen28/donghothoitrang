const AdcanhanModel = require('../models/AdcanhanModel');
const conn = require('../models/config/connect');

class AdcanhanController{
    //[GET] /admin/nhanvien
    canhan(req, res){
        let manv = req.cookies.admin.manv;
        let message = req.query.mess ? req.query.mess: '' ; 
        AdcanhanModel.getCanhanById(manv).then(function(result){
            // console.log(result);
            res.render('admin/adcanhan/canhan', {
                title: 'Quản lý tài khoản',
                nhanvien: result,
                tennv: result.tennv,
                idnv : manv,
                mess: message,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0
            });
        }).catch(function(error){
            res.render('admin/adcanhan/canhan', {
                title: 'Quản lý tài khoản',
                nhanvien: null,
                idnv : manv,
                mess: 0,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0
            });
        })
    }

    saveCanhan(req, res){
        let nv = {
            manv: req.body.idnv,
            tennhanvien: req.body.name, 
            email: req.body.email,
            sodienthoai: req.body.phone,
        };
        console.log(nv);
        AdcanhanModel.updateCanhan(nv).then(function(result){
            res.redirect(`/admin/canhan?idnv=${nv.manv}&mess=1`);
        }).catch(function(err){
            // console.log(err);
            res.redirect(`/admin/canhan?idnv=${nv.manv}&mess=0`);
        })
    }

}


module.exports = new AdcanhanController();