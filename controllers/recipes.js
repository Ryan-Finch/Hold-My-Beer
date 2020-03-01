const Recipe = require('../models/recipe')

module.exports = {
    new: newRecipe,
    show,
    index,
    create
}
function create(req,res){
    user= req.user
    console.log('Connection: recipe create')
    res.redirect('/users/show')
}
function index(req, res){
    user = req.user;
    console.log('connection: index')
    res.render('recipes/index',{
        title: 'Index Recipes',
        user
    })
}
function show(req,res){
    console.log('connection: show')
    res.render('recipes/show', {
        title: 'Show Recipe'
    })
}
function newRecipe(req, res){
    console.log('connection: new recipe')
    const user = req.user;
    res.render('recipes/new',
     {title: 'New Recipe', user})
}