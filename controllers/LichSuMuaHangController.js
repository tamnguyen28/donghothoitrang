const lichsumuahangModel = require('../models/LichSuMuaHangModel');
const homeModel = require('../models/HomeModel');
const axios = require('axios');

let headers =  {
    "Content-Type" : "application/json",
    "Token": "C8876E1c5583dDa8ff4A2AbbCADC3f7f7B96b48b",
}
class LichSuMuaHangController{
    index(req, res){
        if (!req.cookies.user) { 
           return res.redirect(`/dangnhap?isgotoLog=2`);
        }

        let mess = ``;
        if(req.query.mess && req.query.mess == 1){
            mess = 'Hủy đơn thành công'
        }else if(req.query.mess && req.query.mess == 0){
            mess = 'Đơn hàng đã được hủy.'
        }

        let list = [];
        lichsumuahangModel.loadDonhang(req.cookies.user.makh).then(result =>{
            list = result;
            // console.log(list);
            homeModel.loadloaisp().then(resultloai =>{
                res.render('client/lichsumuahang/lichsumuahang', {
                    donhang : groupSanPham(list),
                    title : 'Lịch sử mua hàng',
                    idkh: req.cookies.user ? req.cookies.user.makh: 0,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    loai: resultloai,
                    message: mess
                })
            }).catch(err =>{
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }
    xemdonhang(req, res){
        lichsumuahangModel.getChiTietDonHang(req.query.id, req.cookies.user.makh).then(result =>{
            // console.log(result);
             getTinhTrangDonHang(result[0].id_ghtk).then(function(resultStatus){
                homeModel.loadloaisp().then(resultloai =>{
                    res.render('client/chitietdonhang/chitietdonhang',{
                        title: "Chi tiết đơn hàng",
                        statusOrder: resultStatus.data,
                        chitiet: result,
                        idkh: req.cookies.user ? req.cookies.user.makh: 0,
                        tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                        loai: resultloai,
                    });
                }).catch(err =>{
                    console.log(err);
                }) 
             }).catch(function(err){

             });
        }).catch(err => {
            console.log(err);
        })    
    }

    huydonhang(req, res){
        requestHuyDonHang(req.query.idghtk).then(function(result){
            // console.log(result.data);
            if(result.data.message != 'Shop đã hủy đơn trước đó.'){
                lichsumuahangModel.updateStatusHuyDonHang(req.query.id).then(function(result){
                    res.redirect("/lichsumuahang?mess=1");
                }).catch(function(error){

                })
            }else{
                res.redirect("/lichsumuahang?mess=0");
            }
        }).catch(function(error){
            console.log(error);
        })
    }
}

async function requestHuyDonHang(idGHTK){
    return await axios.post(`https://services.ghtklab.com/services/shipment/cancel/${idGHTK}`, {},{headers})
}

async function getTinhTrangDonHang(idGHTK){
    return await axios.get(`https://services.ghtklab.com/services/shipment/v2/${idGHTK}`, {headers});
}

function groupSanPham(resultSP){
    let results = []; // mang ket qua cuoi cung
    let sp = []; // san pham chua trong mot don hang
    let mahoadonduyetroi = 0; //danh danh hoa don da duyet roi
    let count = resultSP.length;
    for (let i = 0; i < count; i++) {
        if(resultSP[i].mahd != mahoadonduyetroi){
            for(let j = i ; j < count; j++){
                if(resultSP[i].mahd == resultSP[j].mahd){
                    sp.push({
                        tensp: resultSP[j].tensp
                    })
                }
            }
            results.push({
                mahd: resultSP[i].mahd,
                tgtao: resultSP[i].tgtao,
                id_ghtk: resultSP[i].id_ghtk,
                tonghoadon: resultSP[i].tonghoadon,
                sanphams: sp
            })
            mahoadonduyetroi = resultSP[i].mahd;
            sp = []
        }
    }
    return results;
}

module.exports = new LichSuMuaHangController();