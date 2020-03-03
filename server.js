var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const recipeRouter = require('./routes/recipes');
const commentsRouter = require('./routes/comments');
var app = express();

//counnect to MongoDB here
require('./config/database')
require('./config/passport')
//require routes here

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(session({
  secret:'SEIRocks!',
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

//Mount Routes here
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', recipeRouter);
app.use('/', commentsRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
