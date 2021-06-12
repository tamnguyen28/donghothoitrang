class AdhomeController {
    //[GET] /
    index(req, res, next) {
        // console.log(req.cookies.admin);
        if(!req.cookies.admin){
            return res.redirect("/admin/login");
        }

        res.render('admin/home/index',{
            title: 'admin',
        });
    }
}

module.exports = new AdhomeController();