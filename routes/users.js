var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');
const passport = require('passport')
/* GET users listing. */

router.get('/', usersCtrl.index)

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users/index',
    failureRedirect: '/'
  }
  )
)
router.get('/logout', function (req,res){
  req.logout();
  res.redirect('/')
})
router.get('/users/index', usersCtrl.index)
router.get('/users/:id', usersCtrl.show)
router.put('/users/:id', usersCtrl.update)
module.exports = router;
