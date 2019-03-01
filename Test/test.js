const debugging = require('../debugging.js');
const assert = require('assert');

describe("remoteMathService", function() {
    this.timeout(5000);

    it('correctly calculates the sum of 1 and 2', function() {
        var testPromise = debugging.remoteMathService(function (err, answer) {
            var noError = (err===undefined) 
            var correctAnswer = (3 === answer)
        
            return noError && correctAnswer
        })
        return testPromise.then(function(result){
            assert(result, true); 
        })
    });
})

