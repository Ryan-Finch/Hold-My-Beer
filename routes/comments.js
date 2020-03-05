const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments')

router.post('/recipes/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/recipes/:id/comments/:cId', isLoggedIn, commentsCtrl.delete)
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

  module.exports = router;