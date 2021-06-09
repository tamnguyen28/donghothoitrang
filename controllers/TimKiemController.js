const timkiemModel = require('../models/TimKiemModel');

class TimKiemController{

    search(req, res) {
        timkiemModel.search(req.query.search).then(function(result){
            res.render('client/timkiem/timkiem', {
                title: 'Tìm kiếm',
                search: result,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
            });
        }).catch(err => {
            console.log(err);
        });
    }
}
module.exports = new TimKiemController();