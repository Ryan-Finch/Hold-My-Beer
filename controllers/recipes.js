const Recipe = require('../models/recipe')

module.exports = {
    new: newRecipe,
    show,
    index,
    create,
    update,
    delete: deleteRecipe,
}
function update(req,res){
    console.log('connection: update recipe')
    user = req.user
    console.log(user.id)
    
    Recipe.findByIdAndUpdate(req.params.id, req.body ,function(err, recipe){
        res.redirect('/users/index')
    })
}
function deleteRecipe(req, res){
    user = req.user;
    console.log('connection: delete')
    
    Recipe.findByIdAndRemove(req.params.id, function(err, recipe){
        Recipe.find({}, function(err, recipes){
            console.log(recipe)
            if(err) return console.log(err)

            res.render('users/index', { 
                title: 'Recipe Index',
                recipes,
                user
            })
        })
    })
}
function create(req,res){
    user= req.user
    console.log('Connection: recipe create')
    Recipe.create(req.body, function(err, newRecipe){
        Recipe.find({}, function(err, recipes){
            if(err) console.log(err)
       
            res.render('users/index', {
                title: 'Show User',
                user,
                recipes
            })
        })
    })
}
function index(req, res){
    user = req.user;
    console.log('connection: index')
    Recipe.find({}, function(err, recipes){
        console.log({recipes})
        res.render('recipes/index',{
            title: 'Index Recipes',
            user,
            recipes
        });
    })
}
function show(req,res){
    console.log('connection: show')
    const user = req.user;
    Recipe.findById(req.params.id, function(err, recipe){
        
       if(err) console.log(err)
      
    res.render('recipes/show', {
        recipe,
        user,
        title: 'Show Recipe'
    })
})
}
function newRecipe(req, res){
    console.log('connection: new recipe')
    const user = req.user;
    res.render('recipes/new',
     {title: 'New Recipe', user})
}