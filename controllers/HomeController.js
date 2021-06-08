const homeModel = require("../models/HomeModel");

class HomeController {
  //[GET] /
  index(req, res) {
    // console.log('Cookies: ', req.cookies.user)
    let listSP = [];
    homeModel.loadSanPham().then((result) => {
        listSP = result;
      homeModel.loadSanPhamDealhot().then((resultDH) => {
        let listSPDealHot = resultDH;
        homeModel.loadSanPhamFeatured().then((resultFT) => {
          let listSPFeatured = resultFT;
          homeModel.loadSanPhamDrew().then((resultDw) => {
            let listSPDrew = resultDw;
            homeModel.loadSanPhamWatch().then((resultW) => {
              let listWatch = resultW;
              homeModel.loadSanPhamLatest().then((resultLatest) => {
                let listLatest = resultLatest;
                res.render("client/home/index", {
                  title: "donghothoitrang",
                  indexlatest: listLatest,
                  indexwatch: listWatch,
                  indexdrew: listSPDrew,
                  indexfeature: listSPFeatured,
                  indexdealhot: listSPDealHot,
                  index: listSP,
                  mess: req.query.mess ? req.query.mess : '',
                  giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ) 
                });
              })
              
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
      res.render("client/home/index");
    });
  }
}

module.exports = new HomeController();
