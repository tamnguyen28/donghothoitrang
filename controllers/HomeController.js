class HomeController {
    //[GET] /
    index(req, res, next) {
        res.render('client/home/index',{
            title: 'donghothoitrang',
        });
    }
}

module.exports = new HomeController();