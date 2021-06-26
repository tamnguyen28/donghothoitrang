const homeModel = require("../models/HomeModel");

class HomeController {
  //[GET] /
  index(req, res) {
    homeModel.loadSanPham().then((listSP) => {
      homeModel.loadSanPhamDealhot().then((listSPDealHot) => {
        homeModel.loadSanPhamFeatured().then((listSPFeatured) => {
          homeModel.loadSanPhamDrew().then((listSPDrew) => {
            homeModel.loadSanPhamWatch().then((listWatch) => {
              homeModel.loadSanPhamLatest().then((listLatest) => {
                homeModel.loadloaisp().then(function(resultloai){
                  res.render("client/home/index", {
                    title: "donghothoitrang",
                    indexlatest: listLatest,
                    indexwatch: listWatch,
                    indexdrew: listSPDrew,
                    indexfeature: listSPFeatured,
                    indexdealhot: listSPDealHot,
                    index: listSP,
                    loai : resultloai,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    mess: req.query.mess ? req.query.mess : '',
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ) 
                  });
                }).catch((err) => {
                  console.log(err);
                });
              }).catch((err) => {
                console.log(err); 
              });
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
      res.render("client/home/index", {
        title: "donghothoitrang", 
        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )});
    });
  }
}

module.exports = new HomeController();
