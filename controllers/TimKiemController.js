const timkiemModel = require('../models/TimKiemModel');
const homeModel = require('../models/HomeModel');
class TimKiemController{

    search(req, res) {
        timkiemModel.search(req.query.search).then(function(result){
            homeModel.loadloaisp().then(resultloai =>{
                res.render('client/timkiem/timkiem', {
                    title: 'Tìm kiếm',
                    search: result,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    loai: resultloai,
                });
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        });
    }
}
module.exports = new TimKiemController();