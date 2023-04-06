const createError = require('http-errors');
/* Imports the Express framework into the app */
const express = require('express');
/* Import of a core Node module for working with and handling paths */
const path = require('path');
/* Express middleware for handling of cookies */
const cookieParser = require('cookie-parser');
/* Import of express middleware to handle logging of request and responses */
const logger = require('morgan');
/* Adds a body object to a request when handling forms so that POST parameters can be accessed */
const bodyParser = require('body-parser');

/* Dummy pages to show the use of routing */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const individualVehicleRouter = require('./routes/individualVehicle');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* app.use tells the app to use the parameters given to it. This could be a function or a path and a function */

/* Logger logs the request to the console. The dev format includes a lot of information about the request */
app.use(logger('dev'));
/* Gives the app the capability of parsing JSON */
app.use(express.json());
/* Allows app to read data from URLs (GET requests) */
app.use(express.urlencoded({ extended: false }));
/* See above for the purpose of the cookieParser. */
app.use(cookieParser());
/* Tells the app to use the public directory where images, stylesheets and scripts are stored */
app.use(express.static(path.join(__dirname, 'public')));

/* Two routing methods. Two parameters. The path and the function to execute. Routes are usually
* seperated from app.js to keep this file lean and to the point */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', individualVehicleRouter);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* Export statement for app */
module.exports = app;
