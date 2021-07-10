const AdlienheModel = require('../models/AdlienheModel');
const adlienheModel = require('../models/AdlienheModel');
const conn = require('../models/config/connect');

class AdlienheController{
    loadlienhe(req, res){

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }
       
        AdlienheModel.loadLienHe().then(result =>{
            res.render('admin/adlienhe/lienhe',{
                title: 'lienhe',
                lienhe: result,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        }).catch(err =>{
            res.render('admin/home/index', {
                title: 'lienhe',
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        });
    }

    deleteLH(req, res){
        let idlh = req.query.id;
        AdlienheModel.deletelienhe(idlh).then(function(result){
            res.redirect('/admin/lienhe');
        }).catch(function(error){
            res,redirect('/admin/lienhe');
        })
    }
    
}

module.exports = new AdlienheController()