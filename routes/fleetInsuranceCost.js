/* This file contains the main routing for this application. In a more complex application the orutes
* would be split according to their roles within the structure of the project */

/* Creating a function reference of the Express module needed to create a instance of the express Router */
const express = require('express');

/* Creation of an express Router instance */
const router = express.Router();

/* Import of fleeInsuranceCost controller */
const fleetInsuranceCostController = require('../controllers/fleetInsuranceCostController');


/* Route to take in POST request with the individual kilometers and pass them to the addCostToArray function */
router.post('/fleetInsuranceCost', fleetInsuranceCostController.addCostToArray);

/* Route to make a GET request to get the calculation of the total fleet cost by the calculateTotalCost function
* rendered to the index.pug view */
router.get('/fleetInsuranceCost', fleetInsuranceCostController.calculateTotalCost);

/* Route to DELETE all entries in the individual cost array in the controller to clear the page */
router.get('/clearApplication', fleetInsuranceCostController.clearCostArray);

/* Exporting the router instance. */
module.exports = router;
