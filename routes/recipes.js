const express = require('express')
const router = express.Router()
const recipesCtrl = require('../controllers/recipes')

router.get('/recipes/new', recipesCtrl.new)
router.get('/recipes/:id', recipesCtrl.show)
router.get('/recipes/', recipesCtrl.index)
router.post('/recipes', recipesCtrl.create)
router.put('/recipes/:id', recipesCtrl.update)
router.delete('/recipes/:id', recipesCtrl.delete)


module.exports = router;