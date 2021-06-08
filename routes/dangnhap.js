const express = require('express');
const body = require('body-parser');
const router = express.Router();
const cookieParser = require('cookie-parser');
const DangNhapController = require('../controllers/DangNhapController');

//Dang nhap google
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Dang nhap facebook
const FacebookStrategy  = require('passport-facebook').Strategy;
const { dangnhap } = require('../controllers/DangNhapController');

router.use(cookieParser())
router.use(body.urlencoded({ extended: false }))
//Dang nhap google
router.use(passport.initialize());

//Dang nhap google
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: '969464741521-e5205v7a4tvnoqccono6a931htunjpkq.apps.googleusercontent.com',
    clientSecret: 'UImwVcTBe8jEmOIfxDyUwo0E',
    callbackURL: "http://localhost:3000/dangnhap/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));
//Dang nhap Facebook
passport.use(new FacebookStrategy({
  clientID: '333424968148234',
  clientSecret: 'ce1cc52be92b9c205c6326ebdd680e1a' ,
  callbackURL: "http://localhost:3000/dangnhap/facebook/callback",
  profileFields : ['id','displayName','name','gender','email']
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
    }
));

// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', DangNhapController.dangnhap);
router.post('/dangnhap', DangNhapController.postLogin);
router.get('/logout', DangNhapController.logout);

//Dang nhap google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
//Khi auth thanh cong se goi cai nay
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  DangNhapController.loginGoogle);

//Dang nhap facebook
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/dangnhap' }),
  DangNhapController.loginFacebook);

module.exports = router;