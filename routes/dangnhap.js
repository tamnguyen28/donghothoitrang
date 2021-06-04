const express = require('express');
const body = require('body-parser');
const router = express.Router();
var passport = require('passport');
var cookieParser = require('cookie-parser')
const DangNhapController = require('../controllers/DangNhapController');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

router.use(cookieParser())
router.use(body.urlencoded({ extended: false }))
router.use(passport.initialize());

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

// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', DangNhapController.dangnhap);
router.post('/dangnhap', DangNhapController.postLogin);


router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

//Khi auth thanh cong se goi cai nay
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    // lam gi do o day
    // console.log(req.user);
    res.redirect('/')
  });

module.exports = router;