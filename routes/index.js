const homeRouter = require('./home');
const dangkyRoute = require('./dangky');
const thuonghieuRoute = require('./thuonghieu');
const dangnhapRoute = require('./dangnhap');
const donghonamRoute = require('./donghonam');
const donghonuRoute = require('./donghonu');
const tintucRoute = require('./tintuc');
const lienheRoute = require('./lienhe');
const khuyenmailRoute = require('./khuyenmai');
const chitietspRouter = require('./chitietsp');
const giohangRouter = require('./giohang');
const donhangRouter = require('./donhang');

const adhomeRouter = require('./adhome');
const adsanphamRoute = require('./adsanpham');
const addonhangRoute = require('./addonhang');


function route(app){

    app.use('/admin/donhang',addonhangRoute);
    app.use('/admin/sanpham',adsanphamRoute);
    app.use('/admin', adhomeRouter);

    //client
    app.use('/donhang', donhangRouter);
    app.use('/giohang', giohangRouter);
    app.use('/chitietsp',chitietspRouter);
    app.use('/khuyenmai',khuyenmailRoute);
    app.use('/lienhe',lienheRoute);
    app.use('/tintuc',tintucRoute);
    app.use('/donghonu',donghonuRoute);
    app.use('/donghonam',donghonamRoute);
    app.use('/thuonghieu',thuonghieuRoute);
    app.use('/dangnhap',dangnhapRoute);
    app.use('/dangky',dangkyRoute);
    app.use('/', homeRouter);
    
}

module.exports = route;