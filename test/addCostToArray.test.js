/* Require of the expect assertion style of chai */
const expect = require('chai').expect;
/* Require the assert() built-in method of Express */
const assert = require('assert');
/* Require of chai and chaiHttp needed for assertions used in this test */
const chai = require('chai');
const chaiHttp = require('chai-http');

/* Enabling of the chaiHttp interface */
chai.use(chaiHttp);

/* Require the functions included in this test */
const fleetInsuranceCostController = require('../controllers/fleetInsuranceCostController');

/* The describe function encapsulates the tests of the different functions in the fleetInsuranceCost controller */
describe('Functions in the fleetInsuranceCost controller', () => {
    /*it function that describes and contains the execution code for the first function */
    it('Testing addCostToArray function', (done) => {
        const req = {body: {kilometers: 77}};
        const result = fleetInsuranceCostController.addCostToArray((req));
        expect(result).to.equal(241.6);
        done();
    })

    /* it function that describes and contains the execution code for the second function */
    it( 'Testing calculateTotalCost function', (done) => {
        /* Using the chaiHttp interface to test the second function which produces a res.render output */
        chai.request('http://localhost:3000')
            .get('/fleetInsuranceCost')
            .send()
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })
})

assert(5 < 7);