const md5 = require('md5');
const uuid = require('uuidv1');
const mail = require('../models/configmail/configmail');
const AdquenmatkhauModel = require('../models/AdquenmatkhauModel');

let emailUser = '';
let uuidSave = '';
class AdquenmatkhauController {
    index(req, res) {
        let mess = req.query.mess;
        res.render('admin/adquenmatkhau/email', {
            title: 'Quên mật khẩu',
            role: '',
            mess: mess ? mess : -1,
            tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
            manv: req.cookies.admin ? req.cookies.admin.manv : 0
        })
    }

    sendMail(req, res) {

        let email = req.body.emailUser;
        emailUser = email;
        uuidSave = uuid();

        AdquenmatkhauModel.checkMailExist(emailUser).then(function (result) {
            if (result == true) {
                setTimeout(function () {
                    uuidSave = '';
                }, 120000);

                let link = `${req.protocol}://${req.hostname}/admin/quenmatkhau/matkhaumoi?token=${uuidSave}`;

                let contentRegister = `Kính chào quý khách
                FULLTIME đã nhận được yêu cầu thay đổi mật khẩu của quý khách.
                Xin hãy click vào link bên dưới để đổi mật khẩu.
                ${link}
                Mọi thắc mắc và góp ý vui lòng liên hệ với bộ phận chăm sóc khách hàng
        
                - Hotline: 1900 6017
        
                - Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
        
                - Email hỗ trợ: hoidap@fulltime.com`

                mail.sendmail(email, 'Yêu cầu thay đổi mật khẩu', contentRegister);

                res.redirect(`/admin/message?statusCode=1&emailUser=${encodeURIComponent(email)}`);
            } else {
                res.redirect('/admin/quenmatkhau/email?mess=0');

            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    matkhau(req, res) {
        let uuid = req.query.token;

        if (uuid === uuidSave) {
            res.render('admin/adquenmatkhau/matkhaumoi', {
                title: 'Đặt lại mật khẩu',
                role: '',
                tennv: req.cookies.admin ? req.cookies.admin.tennv : '',
                manv: req.cookies.admin ? req.cookies.admin.manv : 0,
            });
        } else {
            res.send('Token hết hạn');
        }
    }

    updateMatKhau(req, res) {
        let pass = req.body.password;

        AdquenmatkhauModel.updateMatKhau(md5(pass), emailUser).then(function (result) {
            if (result == true) {
                uuidSave = '';
                res.redirect('/admin/login');
            }
        }).catch(function (error) {
            // console.log(error);
        })
    }
}

module.exports = new AdquenmatkhauController();
