const AddonhangModel = require('../models/AddonhangModel');
const conn = require('../models/config/connect');

class AddonhangController{
    //[GET] /admin/donhang
    donhang(req, res, next){

        if(!req.cookies.admin){
            return res.redirect('/admin/login')
        }
        
        let mess = ``;
        if(req.query.mess && req.query.mess == 1){
            mess = 'Hủy đơn hàng thành công'
        }else if(req.query.mess && req.query.mess == 0){
            mess = 'Đơn hàng đã được hủy.'
        }

        let loadDH = [];
        AddonhangModel.loadDonHang().then(result =>{
        loadDH = result;
        res.render('admin/addonhang/donhang',{
            title: 'donhang',
            mess: req.query.mess && req.query.mess == 1 ? req.query.mess : '',
            role: req.cookies.admin.id_maloainv,
            donhang: loadDH,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv,
           
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
    // hiện ra trang cập nhật đơn hàng
    updateOrder(req, res){
        AddonhangModel.getOrderByOrderId(req.query.id).then(result =>{
        res.render('admin/addonhang/updatestatus',{
            title: 'updateStatus',
            donhang: result[0],
            role: req.cookies.admin.id_maloainv,
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
            role: req.cookies.admin.id_maloainv,
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
                    role: req.cookies.admin.id_maloainv,
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
    //Huy don hang
    cancelOrder(req, res){
            AddonhangModel.updateCancelOrder(req.query.id).then(function(result){
                res.json({statusCode: 1, mess: 'Hủy đơn hàng thành công'})
            }).catch(function(error){
                res.redirect(`/admin/donhang?mess=0`);
            })
    }
    //danh sach don hang bi huy
    donhangdahuy(req, res, next){
        let loadDH = [];
        AddonhangModel.loadDonHangHuy().then(result =>{
        loadDH = result;
        res.render('admin/addonhang/donhangdahuy',{
            title: 'donhang',
            role: req.cookies.admin.id_maloainv,
            donhang: loadDH,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv,
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
    //xem chi tiet don hang huy
    detailOrderCancel(req, res){
        let iddonhang = req.query.id;
        AddonhangModel.loadChitiet(iddonhang).then(function(resultChitiet){
            AddonhangModel.getOrderByOrderId(iddonhang).then(function(resultsp){
                res.render('admin/addonhang/chitietdonhanghuy',{
                    role: req.cookies.admin.id_maloainv,
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
    // hiện ra trang cập nhật đơn hàng đã hủy
    updatestatuscancel(req, res){
        AddonhangModel.getOrderByOrderId(req.query.id).then(result =>{
        res.render('admin/addonhang/updatestatuscancel',{
            title: 'updateStatus',
            donhang: result[0],
            role: req.cookies.admin.id_maloainv,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        })

        }).catch(err =>{
            res.render('admin/home/index');
        })
    }
    //cap nhat trang thai huy
    updateStatusCancel(req, res){
        let status = req.query.statusdh;
        let iddh = req.query.id;
        // console.log(status)
        AddonhangModel.updateStatusModelCancel(status, iddh).then(function(result){
            // console.log(result);
            res.json({mess: 'thanh cong roi', statusCode: 1 });
        }).catch(function(error){

        })
    }
}



module.exports = new AddonhangController();