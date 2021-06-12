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
            });
        }).catch(err => {
            res.render('admin/home/index');
        });
    }

    createnv(req, res){
        AdnhanvienModel.loadLoaiNV().then(function(result){
            res.render('admin/adnhanvien/createnv', {loaiNvs: result});
        }).catch(function(err){

        });
        
    }
    
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