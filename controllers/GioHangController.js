const homeModel = require("../models/HomeModel");

class GioHangController {
  index(req, res) {
    // console.log(req.get('env'));//devlopment hoặc production
    console.log(req.session.giohang);
    // neu chua danh nhap
    if (!req.cookies.user) {
      res.redirect("/dangnhap");
    }
    // neu khong ton tai gio hang
    if (!req.session.giohang) {
      req.session.giohang = [];
    }
    homeModel.getProductBy(req.query.id).then(function (result) {
        //kiem tra ton tai va lay doi tuong ton tai
        let flag = false;
        let product = {};
        for(let i = 0; i < req.session.giohang.length; i++){
            let temp = req.session.giohang[i];
            if(temp.masp == result.masp){
                flag = true;
                product = temp;
            }
        }
        //neu ton tai thi cong len 
        if(flag === true){
            product.soluong += 1;
            product.tongtien = product.soluong * product.giatien;   
        }else{  
            req.session.giohang.push({
                masp: result.masp,
                tensp: result.tensp,
                soluong: 1,
                hinhanh: result.hinhanh,
                giatien: result.giatien,
                tenthuonghieu: result.tenth,
                tongtien: result.giatien,
                
              });
        }
        // console.log( req.session.giohang.length);
        res.render("client/giohang/giohang", {
          title: "Giỏ hàng",
          giohangs: req.session.giohang,
        });
      })
      .catch(function (errro) {
        res.render("client/giohang/giohang", {
          title: "Giỏ hàng",
          giohangs: [],
        });
      });
  }
  xoagiohang(req, res) {
      if(req.session.giohang){
        let index = req.session.giohang.find(x=>x.masp == req.query.id);
        req.session.giohang.splice(index, 1);
      }

      res.render("client/giohang/giohang", {
        title: "Giỏ hàng",
        giohangs: req.session.giohang,
      });
  }

  tinhslvatongtien(req, res){
    if(req.session.giohang){
      let idproduct = req.query.idsp;
      let spGioHang = req.session.giohang.find(x=>x.masp ==idproduct);
      let sl = req.session.giohang.length;
      

      spGioHang.soluong = req.query.sl;
      spGioHang.tongtien  = spGioHang.soluong * spGioHang.giatien; 
      
      let total = 0;

       for(let i = 0; i < sl; i++){
            total += req.session.giohang[i].tongtien
        }
      res.json({total: spGioHang.tongtien, totalAmount: total});
    }

    res.json({total: 0});
  }
}

module.exports = new GioHangController();
