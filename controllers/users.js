const User = require('../models/user');

module.exports ={
    index,
    show,
}

function show(req, res){
    console.log('connection: user show')
    user = req.user
    res.render('users/show',{
        user,
        title: 'User Page'})
}
function index(req, res, next){
    console.log('connection: index home')
    user = req.user;
        res.render('index', {
            user, 
            title: 'Hold My Beer'
        });
        
    }