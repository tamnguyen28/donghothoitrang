const canhanModel = require('../models/CaNhanModel');
const homeModel = require('../models/HomeModel');
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

}

module.exports = new CaNhanController();