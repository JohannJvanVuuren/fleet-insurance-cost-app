/* Import of the chai expect assertion style */
const expect = require('chai').expect;

/* Import of the request package that allows the testing of HTTP requests by making HTTP calls */
const request = require('request');

/* Import of the built-in assert() method used at the bottom */
const assert = require('assert');

/* Mocha test to ensure the default functionality created for http://localhost:300/users work as expected */
/* The describe() functions to group tests together and describes what is being tested*/
describe('Status and content', () => {
    describe ('Users page', () => {
        /* The it() function that contains the code to execute to test if the status received back from
        * a call to the url below is 200 (I.e., success) */
        it('status', (done) =>{
            request('http://localhost:3000/users',
                (error, response, body) => {
                    /* Chai's expect assertion style used together with assert() below */
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });

        /* The it() function containing the code to execute to check that the information in the body of
        * a call to the url below is correct */
        it('content', (done) => {
            request('http://localhost:3000/users',
                (error, response, body) => {
                    expect(body).to.equal('respond with a resource');
                    done();
                });
        });
    });
});

/* Using the built-in assert() module to describe the expected outcome to be */
assert(5 < 7);
