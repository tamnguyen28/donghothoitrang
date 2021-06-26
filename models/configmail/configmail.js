// main.js
var nodemailer = require('nodemailer');

const emailDefaul = 'nhmtam.c3tqcap.a3@gmail.com';

const option = {
    service: 'gmail',
    auth: {
        user: emailDefaul, // email hoặc username
        pass: 'tamthokha99' // password
    }
};
var transporter = nodemailer.createTransport(option);

module.exports = {
    sendmail: function(emailTo, subject, text ){
        
            transporter.verify(function(errorMail, success) {
               
                // Nếu có lỗi.
                if (errorMail) {
                    console.log(errorMail);
                } else { //Nếu thành công.
                    // console.log('Kết nối thành công!');
                    var mail = {
                        from: `Đồng hồ thời trang <${emailDefaul}>`, // Địa chỉ email của người gửi
                        to: emailTo, // Địa chỉ email của người gửi
                        subject: subject, // Tiêu đề mail
                        text: text, // Nội dung mail dạng text
                    };
                    //Tiến hành gửi email
                    transporter.sendMail(mail, function(error, info) {
                        if (error) { // nếu có lỗi
                            console.log(error);
                        } else { //nếu thành công
                            console.log('Email sent: ' + info.response);
                        }
                    });
                }
            });
       
        
    }
}

 