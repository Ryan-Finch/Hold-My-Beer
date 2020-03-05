const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports ={
    index,
    show,
    home,
    update
}
function update(req, res){
    user = req.user
    User.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect('/users/index')
    })
}
function show(req,res){
    user = req.user;
    res.render('users/show', {
        title: 'Edit Bio',
        user,
    })
}
function index(req, res){
    user = req.user;
    Recipe.find({ user: user._id}, function(err, recipes){
        res.render('users/index',{
            user,
            recipes,
            title: 'User Page'})
        }); 
}
function home(req, res, next){
    user = req.user;
        res.render('index', {
            user,
            title: 'Hold My Beer'
        });
}