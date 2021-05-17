const HomeModel = require('../models/client/HomeModel');
// const conn = require('../models/config/connect');

class HomeController {
    //[GET] /
    index(req, res) {
        let listSP = [];
        HomeModel.loadSanPham().then(result =>{
            listSP = result;
            res.render('client/home/index',{
                title: 'donghothoitrang',
                index: listSP}) 
        }).catch(err =>{
            res.render('client/home/index');
        });
    }
    
}

module.exports = new HomeController();

