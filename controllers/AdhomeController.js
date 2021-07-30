class AdhomeController {
    //[GET] /
    index(req, res, next) {
        // console.log(req.cookies.admin);
        if(!req.cookies.admin){
            return res.redirect("/admin/login");
        }
        
        res.render('admin/home/index',{
            title: 'admin',
            roleAdmin: req.cookies.admin.id_maloainv,
            role: req.cookies.admin.id_maloainv,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            idnv: req.cookies.admin.manv
        });
    }
}

module.exports = new AdhomeController();