const Recipe = require('../models/recipe')


module.exports = {
    create,
    delete: delComment
}
function delComment(req,res){
    user = req.user;
    Recipe.findById(req.params.id, function(err, recipe){
        recipe.comments.id(req.params.cId).remove();
        recipe.save();
        res.redirect(`/recipes/${recipe.id}`)
    } )
   
}
function create(req, res){
    user = req.user;
    Recipe.findById(req.params.id, function(err, recipe){
        recipe.comments.push(req.body);
        recipe.save(function(err){
            res.redirect(`/recipes/${req.params.id}`)
        })
    })
}