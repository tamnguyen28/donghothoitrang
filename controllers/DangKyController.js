
class DangKyController {

    dangky(req, res){
        res.render('client/dangky/dangky', {title: 'dang ky'})
    }

}

module.exports = new DangKyController();