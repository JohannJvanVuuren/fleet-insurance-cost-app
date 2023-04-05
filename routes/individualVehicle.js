/* Creating a function reference of the Express module needed to create a instance of the express Router */
const express = require('express');

/* Create instance of express Router */
const router = express.Router();

/* Import of individualVehicle controller */
const individualVehicleController = require('../controllers/individualVehicle');

/* Creation of route with the individualVehicleController as callback to handle the request */
router.post('/individualVehicle', individualVehicleController.addVehicleCostToArray);

module.exports = router;
