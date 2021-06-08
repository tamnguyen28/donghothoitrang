const timkiemModel = require('../models/TimKiemModel');

class TimKiemController{

    search(req, res) {
        res.render('client/timkiem/timkiem', {
            title: 'Tìm kiếm',
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
        });
    }
}
module.exports = new TimKiemController();