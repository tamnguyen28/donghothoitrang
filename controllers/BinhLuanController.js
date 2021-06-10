const binhluanModel = require('../models/BinhLuanModel');

class BinhLuanController{
    index(req, res){
        res.render('client/binhluan/binhluan', {
            title: 'Bình Luận',
        })
    }
}
module.exports = new BinhLuanController();