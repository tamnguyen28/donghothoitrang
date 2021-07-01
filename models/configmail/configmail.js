// main.js
var nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const API_KEY = `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`;

const emailDefaul = 'nhmtam.c3tqcap.a3@gmail.com';

module.exports = {
    sendmail: function(emailTo, subject, text ){      
        sgMail.setApiKey(API_KEY);
        const message = {
            from: 'Đồng hồ thời trang <nhmtam.c3tqcap.a3@gmail.com>',
            to: emailTo,
            subject: subject,
            text: text,        
        }
        sgMail.send(message).then(res => console.log("Email sendt...")).catch(error => console.log(error.message));
    }
}

 