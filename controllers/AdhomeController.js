class AdhomeController {
    //[GET] /
    index(req, res, next) {
        res.render('admin/home/index',{
            title: 'admin',
        });
    }
}

module.exports = new AdhomeController();