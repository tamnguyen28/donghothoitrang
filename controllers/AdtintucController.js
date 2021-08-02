const conn = require('../models/config/connect');
const AdtintucModel = require('../models/AdtintucModel');

let oldFileName = null;
class AdtintucController{
    tintuc(req, res, next){
        
        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }

        let loadTT = [];
        AdtintucModel.loadtintuc().then(result => {
            loadTT = result;
            res.render('admin/adtintuc/tintuc',{
                title: 'tin tuc',
                tintuc: loadTT,
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            })
        }).catch(err => {
            res.render('admin/home/index',{
                title: 'tin tuc',
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        });
    }

    //[GET] /admin/tintuc/createblog
    createblog(req, res){
        res.render('admin/adtintuc/createblog',{
            role: req.cookies.admin.id_maloainv,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        });
    }

    //[POST] /admin/tintuc/createtintuc
    createtintuc(req, res) {
        let tieude = req.body['tieude'];
        let noidung = req.body['noidung'];
        let trangthai = req.body['trangthai'];
        let hinhanh = req.file.filename;
        let newTt = {
            name: tieude,
            noidung: noidung,
            status: trangthai,
            image: hinhanh,
        }
        AdtintucModel.createTinTuc(newTt).then(result => {
            res.redirect('/admin/tintuc');
        }).catch(err => {
            // console.log(err);
            res.render('/admin/home/index');
        });

    }
    
    //[GET] /admin/tintuc/updateblog
    updateblog(req, res, next){
        let idtintuc = req.query.id;
        AdtintucModel.getBlogById(idtintuc).then(function(result){
            oldFileName = result[0].hinhanh
            res.render('admin/adtintuc/updateblog', { 
                blog: result[0],
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        }).catch(function(err){

        });
    }

    //[POST] /admin/tintuc/updatetintuc
    updatetintuc(req, res, next){
        let matt = req.body['matt'];
        let tieude = req.body['tieude'];
        let noidung = req.body['noidung'];
        let trangthai = Number(req.body['trangthai']);
        let hinhanh =  (req.file ? req.file.filename: oldFileName);
        let newTt = {
            matt: matt,
            name: tieude,
            noidung: noidung,
            status: trangthai,
            image: hinhanh,
        }
        AdtintucModel.updateTinTuc(newTt).then(result => {
            res.redirect('/admin/tintuc');
        }).catch(err => {
            res.render('/admin/home/index');
        });
    }
    
    deleteblog(req, res){
        let idtintuc = req.query.id;

        AdtintucModel.deleteTinTuc(idtintuc).then(function(result){
            res.redirect('/admin/tintuc');
        }).catch(function(error){
            res.redirect('/admin/tintuc');
        });
    }
}


module.exports = new AdtintucController();