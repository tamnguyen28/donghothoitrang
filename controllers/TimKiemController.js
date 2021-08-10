const timkiemModel = require('../models/TimKiemModel');
class TimKiemController{

    search(req, res) {
        let page = req.query.page ? req.query.page : 1;
        let vitribatdaulay = (page - 1) * 10;
        let listTimkiem = [];
        timkiemModel.search(req.query.search).then(function(result){
            listTimkiem = result;
            let soluongtrang  = listTimkiem.length / 10;
            timkiemModel.searchpage(req.query.search, vitribatdaulay).then(function(resultPage){
                res.render('client/timkiem/timkiem', {
                    title: 'Tìm kiếm',
                    numberProduct: listTimkiem.length,
                    search: resultPage,
                    keyword:req.query.search,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    pageNumber: Math.ceil(soluongtrang),
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