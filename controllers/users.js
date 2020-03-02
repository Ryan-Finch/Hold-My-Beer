const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports ={
    index,
    show,
    home,
}
function show(req,res){
    console.log('connection: user show')
    user = req.user;
    console.log(req.params.id)
    Recipe.findById(req.params.id, function(err, recipe){
        console.log(recipe)
        res.render('users/show', {
            title: 'Edit Recipe',
            user,
            recipe
        })
    })
}
function index(req, res){
    console.log('connection: user index')
    user = req.user;
    
    Recipe.find({ user: user._id}, function(err, recipes){
        console.log(recipes)
        res.render('users/index',{
            user,
            recipes,
            title: 'User Page'})
        }); 
}
function home(req, res, next){
    console.log('connection: index home')
    user = req.user;
        res.render('index', {
            user,
            title: 'Hold My Beer'
        });
}