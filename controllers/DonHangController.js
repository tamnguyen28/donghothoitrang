const donhangModel = require('../models/DonHangModel');
const mail = require('../models/configmail/configmail');
const homeModel = require('../models/HomeModel');
const dateFormat = require('dateformat');
const sha256 = require('sha256');

const uuidv1 = require('uuidv1');
const https = require('https');
//parameters send to MoMo get get payUrl
var endpoint = "https://test-payment.momo.vn/gw_payment/transactionProcessor"
var hostname = "https://test-payment.momo.vn"
var path = "/gw_payment/transactionProcessor"
var partnerCode = "MOMOVYVS20210701"
var accessKey = "3nDJ9k3snnTneEaQ"
var serectkey = "h2D40FcZmLcJmGp2mCH6dfMVQVB0dlm8"
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
        homeModel.loadloaisp().then(resultloai =>{
            if(req.query.payonline && (req.query.message == 'Success' || req.query.vnp_ResponseCode == '00') ){

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
                    // console.log("ABC");
                }).catch(err => {
                    console.log(err);
                })
                
                let mess = ``

                //VnPay
                if(req.query.vnp_ResponseCode){
                    mess = `Thanh toán vnpay thành công`;
                }
                
                //MoMo
                if(req.query.message){
                    mess = `Thanh toán MoMo thành công`
                }

                return res.render('client/donhang/donhang', {
                    title: 'Đơn hàng',
                    giohangs: [],
                    totalAmount: 0,
                    message: mess,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    loai: resultloai,
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
               loai: resultloai,
            });
        }).catch(err =>{
            console.log(err);
        }) 
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
        }if(req.body.giaohang == 2){
            return res.redirect('/donhang/create_payment_url');
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

    thanhtoanVNP(req, res) {
        var ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        var tmnCode = 'DWRT5XO9';
        var secretKey = 'TCUVHDKLHACPURHHOUNPMFZWKTVTDGPF';
        var vnpUrl = 'http://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
        var returnUrl = 'http://localhost:3000/donhang?payonline=1';

        var date = new Date();

        var createDate = dateFormat(date, 'yyyymmddHHmmss');
        var orderId = dateFormat(date, 'HHmmss');
        var amount = 10000;

        var orderInfo = 'ABC';
        var orderType = 'kjsdf';
        var locale = 'vn';
        var currCode = 'VND';
        var vnp_Params = {};
        vnp_Params['vnp_Version'] = '2';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        // vnp_Params['vnp_Merchant'] = ''
        vnp_Params['vnp_Locale'] = locale;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = orderInfo;
        vnp_Params['vnp_OrderType'] = orderType;
        vnp_Params['vnp_Amount'] = amount * 100;
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;

        vnp_Params = sortObject(vnp_Params);

        var querystring = require('qs');
        var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });

        var secureHash = sha256(signData);

        vnp_Params['vnp_SecureHashType'] = 'SHA256';
        vnp_Params['vnp_SecureHash'] = secureHash;
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });

        //Neu muon dung Redirect thi dong dong ben duoi
        // res.status(200).json({code: '00', data: vnpUrl})
        //Neu muon dung Redirect thi mo dong ben duoi va dong dong ben tren
        res.redirect(vnpUrl)
    }

    
}

function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

module.exports = new DonHangController();