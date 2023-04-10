const expect = require('chai').expect;

/* Import of the request package that makes possible the testing of HTTP request by making HTTP calls */
const request = require('request');

/* Import of the assert() built-in method of Express to make the assertions below */
const assert = require('assert');

/* Mocha test to test whether the endpoints requests return 200 results */
describe('Incoming HTTP request /clearApplication', () => {
    /* it functions to describe the individual tests and the code needed to execute them */
    it('Status', (done) => {
        request('http://localhost:3000/clearApplication', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    })

})

assert(5 < 7);