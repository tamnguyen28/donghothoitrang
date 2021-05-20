const homeRouter = require('./home');
const dangkyRoute = require('./dangky');

const adhomeRouter = require('./adhome');
const adsanphamRoute = require('./adsanpham');
const addonhangRoute = require('./addonhang');


function route(app){

    app.use('/admin/donhang',addonhangRoute);
    app.use('/admin/sanpham',adsanphamRoute);
    app.use('/admin', adhomeRouter);
    app.use('/dangky',dangkyRoute);
    app.use('/', homeRouter);
    
}

module.exports = route;