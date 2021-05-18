class AddonhangController {
    //[GET] /
    index(req, res, next) {
        res.render('admin/addonhang/donhang',{
            title: 'donhang',
        });
    }
}

module.exports = new AddonhangController();