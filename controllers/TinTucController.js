const tintucModel = require('../models/TinTucModel');
const homeModel =  require('../models/HomeModel')

class TinTucController{
    index(req, res){
        tintucModel.loadSPTT().then(listtt => {
            tintucModel.loadtintuc().then(listtintuc => {
                homeModel.loadloaisp().then(resultloai =>{
                    res.render('client/tintuc/tintuc',
                    {title: 'Tin tức',
                    indextt: listtt,
                    indextintuc: listtintuc,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    idkh:  req.cookies.user ? req.cookies.user.makh: 0 ,
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    loai: resultloai,
                    });
                }).catch(err =>{
                    console.log(err);
                })
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