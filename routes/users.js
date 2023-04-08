/* This is a dummy route that came with the express-generator. It will be used to test the application */

/* Creating a function reference of the Express module needed to create a instance of the express Router */
const express = require('express');

/* Creating an instance of the express Router */
const router = express.Router();

/* GET users listing by using the get method on the router object */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Exporting the router object for use in other modules */
module.exports = router;
