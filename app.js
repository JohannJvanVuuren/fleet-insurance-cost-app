const createError = require('http-errors');
/* Imports the Express framework into the app */
const express = require('express');
/* Importing Helmet for app security */
const helmet = require('helmet');
/* Import of a core Node module for working with and handling paths */
const path = require('path');
/* Express middleware for handling of cookies */
const cookieParser = require('cookie-parser');
/* Import of express middleware to handle logging of request and responses */
const logger = require('morgan');
/* Import of Connect/Express middleware to be used to enable CORS */
const cors = require('cors');

/* Import of the route files and routes needed in the application */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const fleetCostRouter = require('./routes/fleetInsuranceCost');

/* Creation of an app instance */
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* app.use tells the app to use the parameters given to it. This could be a function or a path and a function */

/* Enabling of the CORS enabling middleware */
app.use(cors());
/* Enabling of Helmet */
app.use(helmet());
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
/* Setting up Helmet as middleware */
app.use(helmet());

/* Implementation of Helmet CSP */
const nonce = crypto.randomUUID();
helmet.contentSecurityPolicy({
  directives: {
    "script-src": [`'nonce-${nonce}'`, 'strict-dynamic'],
    "object-src": 'none',
    "base-uri": 'none',
    "Cross-Origin-Resource-Policy": 'same-site',
  }
})

/* Two routing methods. Two parameters. The path and the function to execute. Routes are usually
* seperated from app.js to keep this file lean and to the point */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', fleetCostRouter);


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
