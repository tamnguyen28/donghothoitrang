const AddonhangModel = require('../models/AddonhangModel');
const conn = require('../models/config/connect');

class AddonhangController{
    //[GET] /admin/donhang
    donhang(req, res, next){
        let loadDH = [];
        AddonhangModel.loadDonHang().then(result =>{
        loadDH = result;
        res.render('admin/addonhang/donhang',{
            title: 'donhang',
            mess: req.query.mess == 1 ? req.query.mess : '',
            donhang: loadDH})

        }).catch(err =>{
            res.render('admin/home/index');
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

    deleteOrder(req, res){
        let iddonhang = req.query.id;
        let status = req.query.status;
        
        if(status != 0){
            AddonhangModel.deleteDonHang(iddonhang).then(function(result){
                res.redirect('/admin/donhang');
            }).catch(function(error){
                res.redirect('/admin/donhang');
            });
        }else{
            res.redirect('/admin/donhang?mess=1');
        }
       
    }
    updateOrder(req, res){
       
        AddonhangModel.getOrderByOrderId(req.query.id).then(result =>{
            console.log(result[0]);
        res.render('admin/addonhang/updatestatus',{
            title: 'updateStatus',
            donhang: result[0]})

        }).catch(err =>{
            res.render('admin/home/index');
        })
    }

    updateStatus(req, res){
        let status = req.query.statusdh;
        let iddh = req.query.id;
        // console.log(status)
        AddonhangModel.updateStatusModel(status, iddh).then(function(result){
            
            res.json({mess: 'thanh cong roi', statusCode: 1});
        }).catch(function(error){

        })
        
    }
}



module.exports = new AddonhangController();