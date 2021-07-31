// main.js
var nodemailer = require('nodemailer');

const emailDefaul = 'nhmtam.c3tqcap.a3@gmail.com';

const option = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: emailDefaul, // email hoặc username
        pass: 'tamthokha99' // password
    }
};
var transporter = nodemailer.createTransport(option);


const API_KEY = `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`;

module.exports = {
<<<<<<< HEAD
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
=======
    sendmail: function(emailTo, subject, text ){    
        // console.log(emailTo);  
        sgMail.setApiKey(API_KEY);
        const message = {
            from: 'Đồng hồ thời trang <nhmtho.c3tqcap.a3@gmail.com>',
            to: emailTo,
            subject: subject,
            text: text,        
        }
        sgMail.send(message).then(res => console.log("Email sendt...")).catch(error => console.log(error.message));
>>>>>>> 555a8a4 (temp)
    }
}


 