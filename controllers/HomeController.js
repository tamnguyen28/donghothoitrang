class HomeController {
    //[GET] /
    index(req, res, next) {
        res.render('./layouts/main',{
            title: 'donghothoitrang',
        });
    }
}

module.exports = new HomeController();