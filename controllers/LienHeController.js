const lienheModel = require('../models/LienHeModel');

class LienHeController{
    index(req, res){
        let mess = req.query.mess;
        res.render('client/lienhe/lienhe',{
            title: 'Liên hệ', 
            mess: mess ? mess : -1,
            tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
            idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
        });
    }

    savemess(req, res){
        let tintuc = {
            tennguoilh: req.body.name, 
            sodienthoai: req.body.phone,
            email: req.body.email,
            tieude: req.body.subject,
            noidung: req.body.message
        };

        lienheModel.index(tintuc).then(function(result){
             res.redirect('/lienhe?mess=0');
        }).catch(err => {
            console.log(err);
            res.redirect('/lienhe');
        })
    }
}

module.exports = new LienHeController();
