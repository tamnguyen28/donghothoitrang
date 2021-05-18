const homeRouter = require('./home');
const adhomeRouter = require('./adhome');
const adsanphamRoute = require('./adsanpham');
const addonhangRoute = require('./addonhang');

function route(app){

    app.use('/admin/donhang',addonhangRoute);
    app.use('/admin/sanpham',adsanphamRoute);
    app.use('/admin', adhomeRouter);
    app.use('/', homeRouter);
    
}

module.exports = route;