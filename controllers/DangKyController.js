const dangkyModel = require('../models/DangKyModel');
const mail = require('../models/configmail/configmail');
class DangKyController {

    dangky(req, res){
        let mess = req.query.mess;

        res.render('client/dangky/dangky', {
            title: 'dang ky',
            mess: mess ? mess : 0,
            tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
            idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ), 
        });
    }

    saveKhachhang(req, res){
        let khachhang = {
            tenkhachang: req.body.name, 
            diachi: req.body.address,
            email: req.body.email,
            sodienthoai: req.body.phone,
            taikhoan: req.body.username,
            matkhau:req.body.password,
        };
        dangkyModel.dangky(khachhang).then(function(result){
            let emailTo = khachhang.email;
            let contentRegister = `Thông tin bạn vừa đăng ký thành công:
            Họ tên: ${khachhang.tenkhachang},
            Địa chỉ: ${khachhang.diachi},
            Email: ${khachhang.email},
            Số điện thoại: ${khachhang.sodienthoai},
            Tên đăng nhập: ${khachhang.taikhoan}`;
            mail.sendmail(emailTo, 'Đăng ký tài khoản thành công', contentRegister);
            res.redirect('/dangky?mess=1');
            
        }).catch(function(err){
            console.log(err);
            res.redirect('/dangky');
        })
    }

}

module.exports = new DangKyController();