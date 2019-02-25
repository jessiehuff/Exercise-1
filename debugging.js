function remoteMathService(cb) {
    var one; 
    var two;
    // This variable declaration method can make the code easier to maintain down the road 

    callOneService(function(err, num) {
        one = num;
    });
    callTwoService(function(err, num) {
        two = num;
    });
    return cb(undefined, one + two);
}

function callOneService(cb) {
    return cb(undefined, 1);   //should consider whether or not it's beneficial to use setTimeout 
}
    
function callTwoService(cb) {
    return cb(undefined, 2);
}
    
remoteMathService(function(err, answer) {
    if (err) console.log("error ", err);
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});

//there was a setTimeout that was delaying the execution of the variable inputs (in callOneService and callTwoService), 
// everything else was finishing before then resulting in a NaN result 

module.exports = { remoteMathService, callOneService, callTwoService }