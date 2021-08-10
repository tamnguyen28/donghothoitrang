const lichsumuahangModel = require('../models/LichSuMuaHangModel');
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
            mess = 'Hủy đơn hàng thành công'
        }else if(req.query.mess && req.query.mess == 0){
            mess = 'Đơn hàng đã được hủy trước đó'
        }else if(req.query.mess && req.query.mess == 2){
            mess = 'Đơn hàng đang giao hoặc đã giao không được hủy.'
        }

        let list = [];
        lichsumuahangModel.loadDonhang(req.cookies.user.makh).then(result =>{
            list = result;
            // console.log(list);
                // console.log(groupSanPham(list))
                res.render('client/lichsumuahang/lichsumuahang', {
                    donhang : groupSanPham(list),
                    title : 'Lịch sử mua hàng',
                    idkh: req.cookies.user ? req.cookies.user.makh: 0,
                    tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                    giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    mess: mess
                })
        }).catch(err => {
            console.log(err);
        })
    }
    xemdonhang(req, res){
        lichsumuahangModel.getChiTietDonHang(req.query.id, req.cookies.user.makh).then(result =>{
            // console.log(result);
             getTinhTrangDonHang(result[0].id_ghtk).then(function(resultStatus){
                    res.render('client/chitietdonhang/chitietdonhang',{
                        title: "Chi tiết đơn hàng",
                        statusOrder: resultStatus.data,
                        chitiet: result,
                        idkh: req.cookies.user ? req.cookies.user.makh: 0,
                        tenkh: req.cookies.user ?  req.cookies.user.tenkh : '',
                        giohangs: (req.session && req.session.giohang ? req.session.giohang: [] ),
                    });
             }).catch(function(err){

             });
        }).catch(err => {
            console.log(err);
        })    
    }

    huydonhang(req, res){
        lichsumuahangModel.checkDonHangDangGiao(req.query.id).then(function(result){
            if(result == true){
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
            }else{
                res.redirect("/lichsumuahang?mess=2");
            }
        }).catch(function(error){

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
    // console.log(resultSP);
    let results = [];
    let sp = []; 
    let mahoadonduyetroi = 0;
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
                sanphams: sp,
                ptthanhtoan: resultSP[i].phuongthucthanhtoan,
                phivanchuyen: resultSP[i].phivanchuyen

            })
            mahoadonduyetroi = resultSP[i].mahd;
            sp = []
        }
    }
    return results;
}

module.exports = new LichSuMuaHangController();