const donhangModel = require('../models/DonHangModel');
const mail = require('../models/configmail/configmail');
const dateFormat = require('dateformat');
const sha256 = require('sha256');
const axios = require('axios');


let headers = {
    "Content-Type": "application/json",
    "Token": "C8876E1c5583dDa8ff4A2AbbCADC3f7f7B96b48b",
}

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

var rawSignature = "partnerCode=" + partnerCode + "&accessKey=" + accessKey + "&requestId=" + requestId + "&amount=" + amount + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&returnUrl=" + returnUrl + "&notifyUrl=" + notifyurl + "&extraData=" + extraData

const crypto = require('crypto');
var signature = crypto.createHmac('sha256', serectkey)
    .update(rawSignature)
    .digest('hex');

var body = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    returnUrl: returnUrl,
    notifyUrl: notifyurl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
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
    diachinguoinhan: '',
    tonghoadon: '',
    ghichu: '',
    trangthai: 0,
    phuongthucthanhtoan: 0,
    phivanchuyen: 0,
}
let arraySP = [];
class DonHangController {
    index(req, res) {

        if(!req.cookies.user){
            return res.redirect('/dangnhap');
        }
        
        if (req.query.payonline && (req.query.message == 'Success' || req.query.vnp_ResponseCode == '00')) {
            req.session.giohang = [];
            thongtin.trangthai = 0;

            let arrsp = [];
            let countsp = arraySP.length;

            for (let i = 0; i < countsp; i++) {
                arrsp.push({
                    "name": arraySP[i].tensp,
                    "weight": 0.2,
                    "quantity": arraySP[i].soluong,
                    "product_code": 1241
                })
            }

            let mess = ``

            //VnPay
            if (req.query.vnp_ResponseCode) {
                mess = `Thanh to??n vnpay th??nh c??ng`;
            }
            //MoMo
            if (req.query.message) {
                mess = `Thanh to??n MoMo th??nh c??ng`
            }

            taoDongHangGHTK(arrsp
                , thongtin.tennguoinhan
                , thongtin.diachinguoinhan
                , thongtin.emailnguoinhan
                , thongtin.sdtnguoinhan
                , thongtin.tonghoadon
                , getNgayHienTai()
                , thongtin, req, res).then(function (responeGHTK) {
                    // console.log(res.data); //res.data.order: order sau khi ????ng h??ng ???????c giao h??ng ti???t ki???m tr??? v???
                    // res.data.order.label: Id don h??ng c???a giao h??ng ti???t ki???m
                    // console.log(res.data);
                    donhangModel.themthongtin(thongtin, responeGHTK.data.order.label).then(function (result) {
                      
                        req.session.giohang = [];
                        let contentDonhang = `B???n ???? ?????t h??ng th??nh c??ng, ????n h??ng s??? v???n chuy???n ?????n b???n trong th???i gian s???m nh???t! C???m ??n b???n ???? mua h??ng!
                            T??n ng?????i nh???n: ${thongtin.tennguoinhan},
                            S??? ??i???n tho???i ng?????i nh???n: ${thongtin.sdtnguoinhan},
                            ?????a ch??? ng?????i nh???n: ${thongtin.diachinguoinhan},
                            Email ng?????i nh???n: ${thongtin.emailnguoinhan},
                            T???ng h??a ????n: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thongtin.tonghoadon)},
                            Ghi ch??: ${thongtin.ghichu}`
                        let emailTo = thongtin.emailnguoinhan;
                        mail.sendmail(emailTo, 'SHOP FULLTIME', contentDonhang);  
                        
                        res.redirect(`/message?statusCode=0`);
                    }).catch(err => {
                        console.log(err);      
                    })
                }).catch(function (error) {
                    donhangModel.themthongtin(thongtin, '').then(function (result) {
                      
                        req.session.giohang = [];
                        let contentDonhang = `B???n ???? ?????t h??ng th??nh c??ng, ????n h??ng s??? v???n chuy???n ?????n b???n trong th???i gian s???m nh???t! C???m ??n b???n ???? mua h??ng!
                            T??n ng?????i nh???n: ${thongtin.tennguoinhan},
                            S??? ??i???n tho???i ng?????i nh???n: ${thongtin.sdtnguoinhan},
                            ?????a ch??? ng?????i nh???n: ${thongtin.diachinguoinhan},
                            Email ng?????i nh???n: ${thongtin.emailnguoinhan},
                            T???ng h??a ????n: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thongtin.tonghoadon)},
                            Ghi ch??: ${thongtin.ghichu}`
                        let emailTo = thongtin.emailnguoinhan;
                        mail.sendmail(emailTo, 'SHOP FULLTIME', contentDonhang);  
                        
                        res.redirect(`/message?statusCode=0`);
                    }).catch(err => {
                        console.log(err);      
                    })
                })
            
        }else{
            let sl = req.session.giohang ? req.session.giohang.length : 0;
            let total = 0;
            for (let i = 0; i < sl; i++) {
                total += req.session.giohang[i].tongtien
            }

            getFee(req.cookies.user.diachi).then(function(dataFee){
                
                res.render('client/donhang/donhang', {
                    title: '????n h??ng',
                    giohangs: !req.session.giohang ? [] : req.session.giohang,
                    totalAmount: total,
                    message: '',
                    fee: dataFee.data.fee.fee,
                    kh:req.cookies.user,
                    tenkh: req.cookies.user ? req.cookies.user.tenkh : '',
                    idkh: req.cookies.user ? req.cookies.user.makh : 0,
                });
            }).catch(function(error){
                console.log(error);
            })
        }
    }

    savethongtin(req, res) {
        thongtin = {
            tennguoinhan: req.body.name,
            sdtnguoinhan: req.body.phone,
            diachinguoinhan: req.body.address,
            emailnguoinhan: req.body.email,
            tonghoadon: req.body.tonggiohang,
            ghichu: req.body.note,
            giohangs: (req.session && req.session.giohang ? req.session.giohang : []),
            phuongthucthanhtoan: req.body.giaohang,
            idkh: req.cookies.user.makh,
            phivanchuyen: req.body.phivanchuyen
        }

        if (req.body.giaohang == 1) {
            arraySP = req.session.giohang;
            var request = https.request(options, (respone) => {
                respone.setEncoding('utf8');
                respone.on('data', (body) => {
                    return res.redirect(JSON.parse(body).payUrl);
                });

                respone.on('end', () => {
                });
            });
            request.write(body);
            request.end();
        }else if (req.body.giaohang == 2) {
            arraySP = req.session.giohang;
            return res.redirect('/donhang/create_payment_url');
        } else {
            arraySP = req.session.giohang;
            thongtin.trangthai = 0;

            let arrsp = [];
            let countsp = arraySP.length;
            //l???y s???n ph???m t??? gi??? h??ng v?? chuy???n ?????i theo c???u tr??c giao h??ng ti???t ki???m
            for (let i = 0; i < countsp; i++) {
                arrsp.push({
                    "name": arraySP[i].tensp,
                    "weight": 0.2,
                    "quantity": arraySP[i].soluong,
                    "product_code": 1241
                })
            }

            taoDongHangGHTK(arrsp
                , thongtin.tennguoinhan
                , thongtin.diachinguoinhan
                , thongtin.emailnguoinhan
                , thongtin.sdtnguoinhan
                , thongtin.tonghoadon
                , getNgayHienTai()
                , thongtin, req, res).then(function(responeGHTK){
                    donhangModel.themthongtin(thongtin, responeGHTK.data.order.label).then(function (result) {
                            
                        req.session.giohang = [];
                        let contentDonhang = `B???n ???? ?????t h??ng th??nh c??ng, ????n h??ng s??? v???n chuy???n ?????n b???n trong th???i gian s???m nh???t! C???m ??n b???n ???? mua h??ng!
                            T??n ng?????i nh???n: ${thongtin.tennguoinhan},
                            S??? ??i???n tho???i ng?????i nh???n: ${thongtin.sdtnguoinhan},
                            ?????a ch??? ng?????i nh???n: ${thongtin.diachinguoinhan},
                            Email ng?????i nh???n: ${thongtin.emailnguoinhan},
                            T???ng h??a ????n: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thongtin.tonghoadon)},
                            Ghi ch??: ${thongtin.ghichu}`
                        let emailTo = thongtin.emailnguoinhan;
                        mail.sendmail(emailTo, 'SHOP FULLTIME', contentDonhang);  

                        res.redirect(`/message?statusCode=0`);
                    //    res.redirect('/?mess=2')

                    }).catch(err => {
                        console.log(err);      
                    })
                }).catch(function(error){
                    donhangModel.themthongtin(thongtin, '').then(function (result) {
                      
                        req.session.giohang = [];
                        let contentDonhang = `B???n ???? ?????t h??ng th??nh c??ng, ????n h??ng s??? v???n chuy???n ?????n b???n trong th???i gian s???m nh???t! C???m ??n b???n ???? mua h??ng!
                            T??n ng?????i nh???n: ${thongtin.tennguoinhan},
                            S??? ??i???n tho???i ng?????i nh???n: ${thongtin.sdtnguoinhan},
                            ?????a ch??? ng?????i nh???n: ${thongtin.diachinguoinhan},
                            Email ng?????i nh???n: ${thongtin.emailnguoinhan},
                            T???ng h??a ????n: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thongtin.tonghoadon)},
                            Ghi ch??: ${thongtin.ghichu}`
                        let emailTo = thongtin.emailnguoinhan;
                        mail.sendmail(emailTo, 'SHOP FULLTIME', contentDonhang);  
                        
                        res.redirect(`/message?statusCode=0`);
                    }).catch(err => {
                        console.log(err);      
                    })
                });
      
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
        var returnUrl = 'https://donghothoitrang.herokuapp.com/donhang?payonline=1';

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

    getFee(req, res) {
        let address = req.query.address;

        getFee(address).then(function(responeFee){
            res.json({feeOrder: responeFee.data.fee});
        }).catch(function(error){

        })
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

function getNgayHienTai() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0'); // them cho du 2 ky tu
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! 
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
}

//tenps: m???ng s???n ph???m
function taoDongHangGHTK(tensp, tenguoinhanhang, diachi, email, sdt, tonghoadon, tgtao, thongtindonhang, req, responsehttp) {
   return axios.post("https://services.ghtklab.com/services/shipment/order", {
        "products": tensp,
        "order": {
            "id": Math.floor(Math.random() * 1000000) + 1 + "", //random ma don hang bat ky () 
            "pick_name": "?????ng h??? th???i trang",
            "pick_address": "32 Cao L???",
            "pick_province": "TP. H??? Ch?? Minh",
            "pick_district": "Qu???n 8",
            "pick_ward": "Ph?????ng 4",
            "pick_tel": "0898391560",
            "tel": sdt,
            "name": tenguoinhanhang,
            "address": diachi,
            "email": email,
            "province": "TP. H??? Ch?? Minh",
            "district": "Qu???n 1",
            "ward": "Ph?????ng B???n Ngh??",
            "hamlet": "Kh??c",
            "is_freeship": "1",
            "pick_date": tgtao,
            "pick_money": 47000,
            "note": "Kh???i l?????ng t??nh c?????c t???i ??a: 1.00 kg",
            "value": tonghoadon,
            "transport": "fly",
            "pick_option": "cod",// ????n h??ng xfast y??u c???u b???t bu???c pick_option l?? COD     
            "deliver_option": "xteam", // n???u l???a ch???n ki???u v???n chuy???n xfast    
            "pick_session": 2 // Phi??n l???y xfast 
        }
    }, { headers });
}

function getFee(address) {
    return axios.get('https://services.giaohangtietkiem.vn/services/shipment/fee', {
        headers: headers,
        params: {
            "pick_province": "TP. H??? Ch?? Minh",
            "pick_district": "Qu???n 8",
            "province": "TP. H??? Ch?? Minh",
            "district": "Qu???n 1",
            "address": address,
            "weight": 0.2,
            "transport": "road",
            "deliver_option": "xteam",
            "tags": [1]
        }
    });
}

module.exports = new DonHangController();