const updateMatkhauModel = require('../models/QuenMatKhauModel');
const md5 = require('md5');
const uuid = require('uuidv1');
const mail = require('../models/configmail/configmail');
const QuenMatKhauModel = require('../models/QuenMatKhauModel');

let emailUser = '';
let uuidSave = ''; 
class QuenMatKhauController{
    index(req, res){   
        let mess = req.query.mess;     
        res.render('client/quenmatkhau/email', {
            title: 'Quên mật khẩu',
            idkh:0,
            mess: mess ? mess : -1,
            tenkh: '',
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
        });
    }

    sendMail(req, res) {
       
        let email = req.body.emailUser;
        emailUser = email;
        uuidSave = uuid();

        QuenMatKhauModel.checkMailExist(emailUser).then(function(result){
            if(result == true){
                setTimeout(function(){
                    uuidSave = '';
                },120000);
        
                let link = `${req.protocol}://${req.hostname}:3000/quenmatkhau/matkhaumoi?token=${uuidSave}`;
        
                let contentRegister = `Kính chào quý khách
                FULLTIME đã nhận được yêu cầu thay đổi mật khẩu của quý khách.
                Xin hãy click vào link bên dưới để đổi mật khẩu.
                ${link}
                Mọi thắc mắc và góp ý vui lòng liên hệ với bộ phận chăm sóc khách hàng
        
                - Hotline: 1900 6017
        
                - Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
        
                - Email hỗ trợ: hoidap@fulltime.com`
        
                mail.sendmail(email, 'Yêu cầu thay đổi mật khẩu', contentRegister);
        
                res.redirect(`/message?statusCode=1&emailUser=${encodeURIComponent(email)}`);
            }else{
                res.redirect('/quenmatkhau/email?mess=0');
            }
        }).catch(function(error){
            console.log(error);
        })
    }

    matkhau(req, res){
        let uuid =  req.query.token;

        if(uuid === uuidSave){
            res.render('client/quenmatkhau/matkhaumoi', {
                title: 'Đặt lại mật khẩu',
                idkh:0,
                tenkh: '',
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
            });
        }else{
            res.send('Token hết hạn');
        }  
    }

    updateMatKhau(req, res){
        let pass = req.body.password; 
        
        QuenMatKhauModel.updateMatKhau(md5(pass), emailUser).then(function(result){
            if(result == true){
                uuidSave = '';
                res.redirect('/dangnhap');
            }
        }).catch(function(error){
            console.log(error);
        })
    }
}

module.exports = new QuenMatKhauController();
