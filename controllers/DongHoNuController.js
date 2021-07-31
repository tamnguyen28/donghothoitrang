const donghonuModel = require("../models/DongHoNuModel");
class DongHoNuController {
  
    index(req, res) {
        let page = req.query.page;
        let vitribatdaulay = (page - 1) * 8;
        let listnu = [];
        donghonuModel.loadAllSanPhamNu().then((resultnu) => {
            listnu = resultnu;
            let soluongtrang = listnu.length / 8;

            donghonuModel.loadspnu(vitribatdaulay).then(function(resultPage){
                res.render('client/donghonu/donghonu', {
                    title: "Đồng hồ nữ",
                    indexnu: resultPage,
                    isSearch: false,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    pageNumber: Math.ceil(soluongtrang)
                });
            }).catch(err => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
            res.render('client/donghonu/donghonu');
        });
    }
    locgia(req, res){
        let minPrice = req.query.minPrice;
        let maxPrice = req.query.maxPrice;
       
        donghonuModel.locgia(minPrice, maxPrice, 2).then(function(result){
            let listnu = result;
            let soluongtrang  = listnu.length / 8;
            
            res.render('client/donghonu/donghonu', {
                title: "Đồng hồ nữ",
                isSearch: true,
                indexnu: listnu,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                pageNumber: Math.ceil(soluongtrang)
            });
        }).catch(function(error){
            console.log(error);
        })
    }
}

module.exports = new DongHoNuController();
