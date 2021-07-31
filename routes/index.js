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
const timkiemRouter = require('./timkiem');
const canhanRouter = require('./canhan');
const lichsumuahangRouter = require('./lichsumuahang');
const giaohangRouter = require('./giaohang');
const quenmatkhauRouter = require('./quenmatkhau');

const adhomeRouter = require('./adhome');
const adsanphamRouter = require('./adsanpham');
const adloginRouter = require('./adlogin');
const adkhachhangRouter = require('./adkhachhang');
const adtintucRouter = require('./adtintuc');
const addonhangRouter = require('./addonhang');
const adnhanvienRouter = require('./adnhanvien');
const adloaisanphamRouter = require('./adloaisanpham');
const adcanhanRouter = require('./adcanhan');
const adlienheRouter = require('./adlienhe');
const adtimkiemRouter = require('./adtimkiem');
const adthuonghieuRouter = require('./adthuonghieu');
const messageRouter = require('./message');
function route(app){
    
    app.use('/admin/thuonghieu', adthuonghieuRouter);
    app.use('/admin/timkiem', adtimkiemRouter);
    app.use('/admin/lienhe', adlienheRouter);
    app.use('/admin/canhan', adcanhanRouter);
    app.use('/admin/loaisanpham', adloaisanphamRouter);
    app.use('/admin/nhanvien', adnhanvienRouter);
    app.use('/admin/donhang', addonhangRouter);
    app.use('/admin/tintuc', adtintucRouter);
    app.use('/admin/khachhang', adkhachhangRouter);
    app.use('/admin/sanpham', adsanphamRouter);
    app.use('/admin/login', adloginRouter);
    app.use('/admin', adhomeRouter);
    
    //client
    app.use('/message', messageRouter);
    app.use('/quenmatkhau', quenmatkhauRouter);
    app.use('/giaohang', giaohangRouter);
    app.use('/lichsumuahang', lichsumuahangRouter);
    app.use('/canhan', canhanRouter);
    app.use('/timkiem', timkiemRouter);
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