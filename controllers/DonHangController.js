const donhangModel = require('../models/DonHangModel');
const mail = require('../models/configmail/configmail')

const uuidv1 = require('uuidv1');
const https = require('https');
//parameters send to MoMo get get payUrl
var endpoint = "https://test-payment.momo.vn/gw_payment/transactionProcessor"
var hostname = "https://test-payment.momo.vn"
var path = "/gw_payment/transactionProcessor"
var partnerCode = "MOMOFIL020210605"
var accessKey = "BK3xGm6SRVQl9JRE"
var serectkey = "1dmGQbz6c3JSrgDWjTxvov36XteMoLYO"
var orderInfo = "pay with MoMo"
var returnUrl = "https://donghothoitrang.herokuapp.com/donhang?payonline=1"; //
var notifyurl = "https://callback.url/notify"
var amount = "50000"
var orderId = uuidv1()
var requestId = uuidv1()
var requestType = "captureMoMoWallet"
var extraData = "merchantName=;merchantId=" 

var rawSignature = "partnerCode="+partnerCode+"&accessKey="+accessKey+"&requestId="+requestId+"&amount="+amount+"&orderId="+orderId+"&orderInfo="+orderInfo+"&returnUrl="+returnUrl+"&notifyUrl="+notifyurl+"&extraData="+extraData

const crypto = require('crypto');
var signature = crypto.createHmac('sha256', serectkey)
                   .update(rawSignature)
                   .digest('hex');


var body = JSON.stringify({
    partnerCode : partnerCode,
    accessKey : accessKey,
    requestId : requestId,
    amount : amount,
    orderId : orderId,
    orderInfo : orderInfo,
    returnUrl : returnUrl,
    notifyUrl : notifyurl,
    extraData : extraData,
    requestType : requestType,
    signature : signature,
})

var options = {
  hostname: 'test-payment.momo.vn',
  port: 443,
  path: '/gw_payment/transactionProcessor',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body)
 }
};

let thongtin = {
    tennguoinhan: '',
    sdtnguoinhan: '',
    diachinguoinhan:'',
    tonghoadon: '',
    ghichu: '',
    trangthai: 0,
    phuongthucthanhtoan: 0,
}

class DonHangController{
    index(req, res){
        if(req.query.payonline && req.query.message == 'Success'){
            req.session.giohang = [];
            let contentDonhang = `Bạn đã đặt hàng thành công, đơn hàng sẽ vận chuyển đến bạn trong thời gian sớm nhất! Cảm ơn bạn đã mua hàng!
                Tên người nhận: ${thongtin.tennguoinhan},
                Số điện thoại người nhận: ${thongtin.sdtnguoinhan},
                Địa chỉ người nhận: ${thongtin.diachinguoinhan},
                Email người nhận: ${thongtin.emailnguoinhan},
                Tổng hóa đơn: ${thongtin.tonghoadon},
                Ghi chú: ${thongtin.ghichu}`
                let emailTo = thongtin.emailnguoinhan;
                mail.sendmail(emailTo, 'FULLTIME', contentDonhang);
            thongtin.trangthai = 1;
            donhangModel.themthongtin(thongtin).then(function(result) { 
            }).catch(err => {
                console.log(err);
            })
            return res.render('client/donhang/donhang', {
                title: 'Đơn hàng',
                giohangs: [],
                totalAmount: 0,
                message: req.query.localMessage ? req.query.localMessage : '' ,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
            });
        }
        let sl = req.session.giohang ? req.session.giohang.length: 0;
        let total = 0;
        for(let i = 0; i < sl; i++){
            total += req.session.giohang[i].tongtien
        }
        res.render('client/donhang/donhang', {
           title: 'Đơn hàng',
           giohangs:  !req.session.giohang ? [] : req.session.giohang, 
           totalAmount: total,
           message: '',
           tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
           idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
        });
    }

    savethongtin(req, res){
        
        thongtin = {
            tennguoinhan: req.body.name,
            sdtnguoinhan: req.body.phone,
            diachinguoinhan: req.body.address,
            emailnguoinhan: req.body.email,
            tonghoadon: req.body.tonggiohang,
            ghichu: req.body.note,
            giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ), 
            phuongthucthanhtoan: req.body.giaohang,
            idkh: req.cookies.user.makh
        }
        if(req.body.giaohang == 1){
            var request = https.request(options, (respone) => {
                respone.setEncoding('utf8');
                respone.on('data', (body) => { 
                   return res.redirect(JSON.parse(body).payUrl) 
                });
                respone.on('end', () => {
                });
              });
              request.on('error', (e) => {
              });
              request.write(body);
              request.end();
        }else{
            thongtin.trangthai = 0;
            donhangModel.themthongtin(thongtin).then(function(result) {
                req.session.giohang = [];
                let contentDonhang = `Bạn đã đặt hàng thành công, đơn hàng sẽ vận chuyển đến bạn trong thời gian sớm nhất! Cảm ơn bạn đã mua hàng!
                Tên người nhận: ${thongtin.tennguoinhan},
                Số điện thoại người nhận: ${thongtin.sdtnguoinhan},
                Địa chỉ người nhận: ${thongtin.diachinguoinhan},
                Email người nhận: ${thongtin.emailnguoinhan},
                Tổng hóa đơn: ${thongtin.tonghoadon},
                Ghi chú: ${thongtin.ghichu}`
                let emailTo = thongtin.emailnguoinhan;
                mail.sendmail(emailTo, 'SHOP FULLTIME', contentDonhang);
                res.redirect('/?mess=2')
            }).catch(err => {
                console.log(err);
                res.redirect('/donhang');
            })
        }     
    }
}
module.exports = new DonHangController();