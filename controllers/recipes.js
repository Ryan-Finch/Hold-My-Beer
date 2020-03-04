const Recipe = require('../models/recipe')
const Arrays = require('../models/arrays')
const grains = Arrays.getAllGrains();
const hops = Arrays.getAllHops();
const lagers = Arrays.getAllLagers();
const ales = Arrays.getAllAles();
const hybrids= Arrays.getAllHybrids();

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
    update
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
            res.redirect(`/users/index`)
        })
    })
}
function create(req,res){
    user= req.user
    console.log('Connection: recipe create')
    Recipe.create(req.body, function(err, newRecipe){
        Recipe.find({}, function(err, recipes){
            if(err) console.log(err)
       
            res.redirect('/recipes/')
        })
    })
}
function index(req, res){
    user = req.user;
    console.log('connection: index')
  
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    
    console.log(modelQuery)
    Recipe.find(modelQuery, function(err, recipes){
        res.render('recipes/index',{
            title: 'Index Recipes',
            name: req.query.name,
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
        title: 'Show Recipe',
        grains,
        hops,
        lagers,
        ales,
        hybrids
    })
})
}
function newRecipe(req, res){
    console.log('connection: new recipe')
    const user = req.user;

    res.render('recipes/new',
     {
    title: 'New Recipe',
    user,
    grains,
    hops,
    lagers,
    ales,
    hybrids,
})
}