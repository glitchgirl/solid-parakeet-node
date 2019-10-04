// export this has da promise
module.exports = { 
    congrat :function(){
    new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    })
}
}