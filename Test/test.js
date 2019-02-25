const debugging = require('./Exercise 1/debugging');
const assert = require('assert');

describe("remoteMathService", function() {
    let one = 1;
    let two = 2 ; 
    let expected = one + two; 
    
    it('correctly calculates the sum of 1 and 2', () => {
        assert.equal(debugging.remoteMathService(), expected); 
    });  //having trouble calling the function with all the callbacks 
})