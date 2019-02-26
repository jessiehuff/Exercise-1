const debugging = require('../debugging.js');
const assert = require('assert');

describe("remoteMathService", function() {
    
    it('correctly calculates the sum of 1 and 2', () => {
        assert.equal(debugging.remoteMathService(function (err, answer) {
            var noError = (err===undefined) 
            var correctAnswer = (3 === answer)
        
            return noError && correctAnswer 
        }), true); 
    });   
})

