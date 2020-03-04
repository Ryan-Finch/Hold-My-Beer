const express = require('express')
const router = express.Router()
const recipesCtrl = require('../controllers/recipes')

router.get('/recipes/new', isLoggedIn, recipesCtrl.new)
router.get('/recipes/:id', recipesCtrl.show)
router.get('/recipes/', recipesCtrl.index)
router.post('/recipes', isLoggedIn, recipesCtrl.create)
router.put('/recipes/:id', isLoggedIn, recipesCtrl.update)
router.delete('/recipes/:id', isLoggedIn, recipesCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;