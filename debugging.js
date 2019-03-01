async function remoteMathService(cb) {
    var one; 
    var two;
    // This variable declaration method can make the code easier to maintain down the road 

    await callOneService(function(err, num) {
        one = num;
    });
    await callTwoService(function(err, num) {
        two = num;
    });
    
     return new Promise(function (resolve){
         resolve(cb(undefined, one + two))
     })
}

function callOneService(cb) {
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(cb(undefined, 1));
        }, 1000); 
    }
    )
}

function callTwoService(cb) {
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve( cb(undefined, 2)); 
        }, 1500);
    })
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