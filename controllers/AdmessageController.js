class AdmessageController{
    index(req, res){
        let emailUser = decodeURIComponent(req.query.emailUser);
        let statusCode = req.query.statusCode;
        let message
        if(statusCode == 1){
            message = `Email hướng dẫn tạo mật khẩu đã được gửi đến địa chỉ ${emailUser}. Hãy kiểm tra email và làm theo hướng dẫn.
                         Nếu không thấy email trong hộp thư đến (inbox), vui lòng kiểm tra hộp thư Spam hoặc Junk Folder.`;
        }else{
            message = 'Bạn đã đặt hàng thành công. Cảm ơn bạn!'
        }

        res.render('admin/admessage/message',{
            title: 'Thông báo', 
            message: '',
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv: 0,
            message: message,
            status: statusCode
        });
    }
}

module.exports = new AdmessageController();