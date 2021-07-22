const AddonhangModel = require('../models/AddonhangModel');
const conn = require('../models/config/connect');

class AddonhangController{
    //[GET] /admin/donhang
    donhang(req, res, next){

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }

        let loadDH = [];
        AddonhangModel.loadDonHang().then(result =>{
        loadDH = result;
        res.render('admin/addonhang/donhang',{
            title: 'donhang',
            mess: req.query.mess == 1 ? req.query.mess : '',
            role: req.cookies.admin.id_maloainv,
            donhang: loadDH,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        })

        }).catch(err =>{
            res.render('admin/home/index',{
                title: 'donhang',
                role: req.cookies.admin.id_maloainv,
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                idnv: req.cookies.admin.manv
            });
        })
    }

    getOrderByOrderId(req, res){
        let idcustomer = req.query.id;

        AddonhangModel.getOrderByOrderId(idcustomer).then(function(result){
            res.json(result);
        }).catch(function(error){
            res.json({mess: 'loi roi'});
        });
    }

    updateOrder(req, res){
        AddonhangModel.getOrderByOrderId(req.query.id).then(result =>{
        res.render('admin/addonhang/updatestatus',{
            title: 'updateStatus',
            donhang: result[0],
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        })

        }).catch(err =>{
            res.render('admin/home/index');
        })
    }

    updateStatus(req, res){
        let status = req.query.statusdh;
        let iddh = req.query.id;
        // console.log(status)
        AddonhangModel.updateStatusModel(status, iddh).then(function(result){
            
            res.json({mess: 'thanh cong roi', statusCode: 1 });
        }).catch(function(error){

        })
    }
    doanhthu(req, res){
        res.render('admin/addonhang/doanhthu',{
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        });
    }

    doanhthunam(req, res){
        let namhientai = req.query.namhientai;
        AddonhangModel.DoanhThu(namhientai).then(function(result){
            res.json({doanhthus: result})
        })
    }
    //xem chi tiết đơn hàng
    detailOrder(req, res){
        let iddonhang = req.query.id;
        AddonhangModel.loadChitiet(iddonhang).then(function(resultChitiet){
            AddonhangModel.getOrderByOrderId(iddonhang).then(function(resultsp){
                res.render('admin/addonhang/chitietdonhang',{
                    tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                    manv: req.cookies.admin ? req.cookies.admin.manv: 0,
                    idnv: req.cookies.admin.manv,
                    chitiet: resultChitiet,
                    chitietsp: resultsp,
                });
            }).catch(err =>{
                console.log(err);
            })
            
        }).catch(err =>{
            console.log(err);
        });
    }
}



module.exports = new AddonhangController();