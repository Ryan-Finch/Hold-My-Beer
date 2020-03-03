const Recipe = require('../models/recipe')


module.exports = {
    create
}

function create(req, res){
    console.log('connection: Comments')
    user = req.user;
    Recipe.findById(req.params.id, function(err, recipe){
        recipe.comments.push(req.body);
        recipe.save(function(err){
            res.render(`recipes/show`,{
            title: 'Recipe Show', 
            user, 
            recipe})
        })
    })
}