const Recipe = require('../models/recipe')
const Arrays = require('../models/arrays')
const grains = Arrays.getAllGrains().sort();
const hops = Arrays.getAllHops().sort();
const lagers = Arrays.getAllLagers().sort();
const ales = Arrays.getAllAles().sort();
const hybrids= Arrays.getAllHybrids().sort();

module.exports = {
    new: newRecipe,
    show,
    index,
    create,
    update,
    delete: deleteRecipe,
}
function update(req,res){
    user = req.user
    update
    req.body.adjuncts = req.body.adjuncts.replace(/\s*,\s*/g, ',');
    if(req.body.adjuncts) req.body.adjuncts = req.body.adjuncts.split(',');
    Recipe.findByIdAndUpdate(req.params.id, req.body ,function(err, recipe){
        res.redirect('/users/index')
    })
}
function deleteRecipe(req, res){
    user = req.user;
    Recipe.findByIdAndRemove(req.params.id, function(err, recipe){
        Recipe.find({}, function(err, recipes){
            if(err) return console.log(err)
            res.redirect(`/users/index`)
        })
    })
}
function create(req,res){
    user= req.user
    req.body.adjuncts = req.body.adjuncts.replace(/\s*,\s*/g, ',');
    if(req.body.adjuncts) req.body.adjuncts = req.body.adjuncts.split(',');
    Recipe.create(req.body, function(err, newRecipe){
        Recipe.find({}, function(err, recipes){
            if(err) console.log(err)
            res.redirect('/recipes/')
        })
    })
}
function index(req, res){
    user = req.user;
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
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