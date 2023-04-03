/* Import of chai assertion style used in this test */
const expect = require('chai').expect;

/* Import of the request package that allows for the testing of HTTP requests by making HTTP calls */
const request = require('request');

/* Import the assert() built-in method of express to use below */
const assert = require('assert');

/* Mocha test to ensure the default functionality created for http://localhost:3000/ works as expected */
/* describe() functions to group tests together and describe what is being tested */
describe('Index page', () => {
    /* it() functions to describe the actual test and the contains the code needed for the execution of the test */
    it('Test for success message on HTTP request', (done) => {
        /* The request package to allow for the testing of the HTTP request */
        request('http://localhost:3000/', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    })
})

/* Using the built-in assert() module to describe the expected outcome */
assert(5 < 7);