const homeModel = require("../models/HomeModel");

class HomeController {
  //[GET] /
  index(req, res) {
    let listSP = [];
    homeModel.loadSanPham().then((result) => {
        listSP = result;
        homeModel.loadSanPhamDealhot().then(resultDH => {
            let listSPDealHost = resultDH;  
            //viet them o day ne
            //giong nhu loadsanphamdealhot a
            res.render("client/home/index", {
                title: "donghothoitrang",
                indexdealhost: listSPDealHost,
                index: listSP,
            });
        }).catch(err => {
            console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
        res.render("client/home/index");
      });
  }
}

module.exports = new HomeController();
