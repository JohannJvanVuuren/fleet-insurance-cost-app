/* Importing the Express module required in this route */
const express = require('express');

/* Creation of a Router instance */
const router = express.Router();

/* Definition of the GET home page route */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fleet Insurance Cost Calculator' });
});

/* Exporting the router from this module so that it can be used and imported from other modules */
module.exports = router;
