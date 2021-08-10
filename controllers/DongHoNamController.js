const donghonamModel = require("../models/DongHoNamModel");

class DongHoNamController {
  
    index(req, res) {
        let page = req.query.page;
        let vitribatdaulay = (page - 1) * 8;
        let listnam = [];
        donghonamModel.loadAllSanPham().then((resultnam) => {
            listnam = resultnam;
            let soluongtrang  = listnam.length / 8;

            donghonamModel.loadspnam(vitribatdaulay).then(function(resultPage){
                res.render('client/donghonam/donghonam', {
                    title: "Đồng hồ nam",
                    indexnam: resultPage,
                    isSearch: false,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    pageNumber: Math.ceil(soluongtrang),
                    min: 0,
                    max: 0,
                });
            }).catch(function(error){
                console.log(error);
            })
        }).catch((err) => {
            console.log(err);
            res.render('client/donghonam/donghonam', {
                title: "Đồng hồ nam",
                isSearch: false,
                indexnam:[],
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                pageNumber: 0,
                min: 0,
                max: 0,
            });
        });
    }

    locgia(req, res){
        let page = req.query.page ? req.query.page : 1;
        let vitribatdaulay = (page - 1) * 8;
        
        let minPrice = req.query.minPrice;
        let maxPrice = req.query.maxPrice;
       
        donghonamModel.locgia(minPrice, maxPrice, 1).then(function(result){
            let listnam = result;
            let soluongtrang  = listnam.length / 8;
            
            donghonamModel.locgiaLimit(minPrice, maxPrice, 1, vitribatdaulay).then(function(resultProductPaging){
                res.render('client/donghonam/donghonam', {
                    title: "Đồng hồ nam",
                    isSearch: true,
                    indexnam: resultProductPaging,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    pageNumber: Math.ceil(soluongtrang),
                    min: minPrice,
                    max: maxPrice,
                });
            }).catch(function(error){
                console.log(error);
            })
        }).catch(function(error){
            console.log(error);
        })
    }
}

module.exports = new DongHoNamController();
