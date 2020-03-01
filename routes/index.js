var express = require('express');
var router = express.Router();
const passport = require('passport')
/* GET home page. */


router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Hold My Beer' });
});
module.exports = router;