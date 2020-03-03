const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports ={
    index,
    show,
    home,
    update
}
function update(req, res){
    console.log('connection: update user')
    user = req.user
    User.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect('/users/index')
    })
}
function show(req,res){
    console.log('connection: user show')
    user = req.user;
    res.render('users/show', {
        title: 'Edit Bio',
        user,
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