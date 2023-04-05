/* Import of the chai expect assertion style */
const expect = require('chai').expect;

/* Import of the request package that allows the testing of HTTP requests by making HTTP calls */
const request = require('request');

/* Import of the built-in assert() method used at the bottom */
const assert = require('assert');

/* Import of function to be tested */
const calculateInsurance = require('../controllers/fleetInsuranceCalculator');

/* Mocha test to ensure the default functionality created for the fleetInsuranceCalculator.js module work as expected */
/* The describe() function to group tests together and describe what they do */
describe('calculateInsurance()', () => {
    /* The it() function to describe the actual test and the code needed to execute the test */
    it('Should calculate insurance cost based on km driven', () => {
        const kilometersDriven = 75
        expect(calculateInsurance(kilometersDriven)).to.equal(240)
    })
})

/* Using the built-in assert() module to describe the expected outcome to be */
assert(5 < 7);