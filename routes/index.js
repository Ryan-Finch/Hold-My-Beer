var express = require('express');
var router = express.Router();
const passport = require('passport')
/* GET home page. */


router.get('/', function(req, res, next) {
  user = req.user;
  res.render('index', { title: 'Hold My Beer', user });
});
module.exports = router;