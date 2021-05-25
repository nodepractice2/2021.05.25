const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middleware');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.get('/main', isLoggedIn, (req, res) => {
  res.render('main', { title: '메인페이지' });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입' });
});

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('login', {
    title: '로그인',
    twits,
  });
});

module.exports = router;