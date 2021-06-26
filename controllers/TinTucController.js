const tintucModel = require('../models/TinTucModel');

class TinTucController{
    index(req, res){
        let listtt = [];
        tintucModel.loadSPTT().then(resultt => {
            listtt = resultt;
            tintucModel.loadtintuc().then(resultintuc => {
                let listtintuc = resultintuc;
                res.render('client/tintuc/tintuc',
                {title: 'Tin tức',
                indextt: listtt,
                indextintuc: listtintuc,
                tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                giohangs: (req.session && req.session.giohang ? req.session.giohang: [] )
                });
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
            res.render('client/tintuc/tintuc');
        })
    }
}

module.exports = new TinTucController();