/* Import of the chai expect assertion style */
const expect = require('chai').expect;

/* Import of the request package that allows the testing of HTTP requests by making HTTP calls */
const request = require('request');

/* Import of the built-in assert() method used at the bottom */
const assert = require('assert');

/* Mocha test to ensure the default functionality created for http://localhost:300/users work as expected */
/* The describe() functions to group tests together and describes what is being tested*/
describe('Status and content', function() {
    describe ('Users page', function() {
        /* The it() functions describe the actual test and contains the code needed to execute the test */
        it('status', function(done){
            request('http://localhost:3000/users',
                function(error, response, body) {
                    /* Chai's expect assertion style used together with assert() below */
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });
        it('content', function(done) {
            request('http://localhost:3000/users',
                function(error, response, body) {
                    expect(body).to.equal('respond with a resource');
                    done();
                });
        });
    });
});

/* Using the built-in assert() module to describe the expected outcome to be */
assert(5 < 7);
