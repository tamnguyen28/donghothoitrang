const adtimkiemModel = require('../models/AdtimkiemModel');
class AdtimkiemController{

    search(req, res) {
        adtimkiemModel.search(req.query.search).then(function(result){
                res.json({dataSearch: result, role: req.cookies.admin.id_maloainv});
        }).catch(err => {
            console.log(err);
        });
    }
    searchkhachhang(req, res) {
        adtimkiemModel.searchKhachhang(req.query.search).then(function(result){
                res.json({dataSearchkh: result, role: req.cookies.admin.id_maloainv});
        }).catch(err => {
            console.log(err);
        });
    }
}
module.exports = new AdtimkiemController();