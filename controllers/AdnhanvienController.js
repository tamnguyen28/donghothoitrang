const AdnhanvienModel = require('../models/AdnhanvienModel');
const conn = require('../models/config/connect');
const md5 = require('md5');

class AdnhanvienController{
    //[GET] /admin/nhanvien
    nhanvien(req, res){
        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }
        
        AdnhanvienModel.loadnhanvien().then(result =>{
            res.render('admin/adnhanvien/nhanvien',{
                title: 'nhanvien',
                nhanvien: result,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        }).catch(err => {
            console.log(err);
            res.render('admin/home/index',{
                title: 'nhanvien',
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        });
    }
    //[GET] admin/nhanvien/createnv
    createnv(req, res){
        AdnhanvienModel.loadLoaiNV().then(function(result){
            res.render('admin/adnhanvien/createnv', {
                loaiNvs: result,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        }).catch(function(err){

        });
    }
    //[GET] admin/nhanvien/createnhanvien
    createnhanvien(req, res){
        let tennv = req.body['tennv'];
        let email = req.body['email'];
        let matkhau = req.body['matkhau'];
        let sodienthoai = req.body['sodienthoai'];
        let trangthai = req.body['trangthai'];
        let loainhanvien = Number(req.body['id_maloainv']);
        let newNV = {
            name: tennv,
            email: email,
            password: md5(matkhau),
            phone: sodienthoai,
            status: trangthai,
            type: loainhanvien
        }
        AdnhanvienModel.createNhanVien(newNV).then(result => {
            res.redirect('/admin/nhanvien');
        }).catch(err => {
            console.log(err);
            res.render('/admin/home/index');
        })
    }
    //[GET] /admin/nhanvien/updateNV
    updateNV(req, res){
        let idnhanvien = req.query.id;
        AdnhanvienModel.getNhanvienById(idnhanvien).then(function(result){
                res.render('admin/adnhanvien/updatenv',{ 
                    nhanvien: result[0],
                    role: req.cookies.admin.id_maloainv,
                    tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                    manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                    idnv: req.cookies.admin.manv
                });
        }).catch(function(err){
        });
    }
    //[POST] /admin/nhanvien/updatenhanvien
    updatenhanvien(req, res){
        let manv = req.body['manv'];
        let trangthai = req.body['trangthai'];
        let newNV = {
            manv: manv,
            status: trangthai,
        }
        AdnhanvienModel.updateNhanVien(newNV).then(result => {
            res.redirect('/admin/nhanvien');
        }).catch(err => {
            // console.log(err);
            res.render('/admin/home/index');
        })
    }

    deleteNV(req, res){
        let idnhanvien = req.query.id;
        AdnhanvienModel.deleteNhanVien(idnhanvien).then(function(result){
            res.redirect('/admin/nhanvien');
        }).catch(function(error){
            res.redirect('/admin/nhanvien');
        })
    }

}

module.exports = new AdnhanvienController();