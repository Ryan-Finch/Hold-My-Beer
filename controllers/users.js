const User = require('../models/user');

module.exports ={
    index,
    show
}
function show(req, res){
    user = req.user
    res.render('users/show',{
        user,
        title: 'User Page'})
}
function index(req, res, next){
    let modelQuery = req.query.name ? {name: new RegExp(req.query, name, 'i')} : {};

    let sortKey = req.query.sort || 'name';
    User.find(modelQuery).exec(function(err, user){
        if(err) return next(err);

        res.render('index', {
            user, 
            user: req.user,
            name: req.query.name,
            sortKey,
            title: 'Hold My Beer'
        });
        })
    }