const homeModel =  require('../models/HomeModel');

class MessageController{
    index(req, res){
        let emailUser = decodeURIComponent(req.query.emailUser);
        let statusCode = req.query.statusCode;
        let message
        if(statusCode == 1){
            message = `Email hướng dẫn tạo mật khẩu đã được gửi đến địa chỉ ${emailUser}. Hãy kiểm tra email và làm theo hướng dẫn. Nếu không thấy email trong hộp thư đến (inbox), vui lòng kiểm tra hộp thư Spam hoặc Junk Folder.`;
        }else{
            message = 'Bạn đã đặt hàng thành công. Cảm ơn bạn!'
        }

        homeModel.loadloaisp().then(resultloai =>{
            res.render('client/message/message',{
                title: 'Thông báo', 
                message: '',
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                loai: resultloai,
                message: message,
                status: statusCode
            });
        }).catch(err =>{
            console.log(err);
        })
    }
}

module.exports = new MessageController();
