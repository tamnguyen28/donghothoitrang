const lienheModel = require('../models/LienHeModel');

class LienHeController{
    index(req, res){
        res.render('client/lienhe/lienhe',{
            title: 'Liên hệ', message: ''}
            
        );
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
            res.render('client/lienhe/lienhe',
            {title: 'Liên hệ', message:'Gửi ý kiến thành công'},
            );
        }).catch(err => {
            console.log(err);
            res.redirect('/lienhe');
        })
    }
}

module.exports = new LienHeController();
