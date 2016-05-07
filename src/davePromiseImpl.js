

function Impl(callback) {
    var callbackQueue = [],
        resolved,
        rejected;

    var resolve = value =>{
        resolved = value;
        console.log("resolved value after callback: " + resolved);
        console.log("about to process callback queue");
        processCAllbackQueue();
    };

    var reject = error => {
        rejected = error;
        console.log("rejected value after callback: " + rejected);
    }

    var processCAllbackQueue = () => {
        if(resolved != undefined && resolved) {
            for (let callback of callbackQueue) {
                console.log("about to process this callback from the queue: " + callback);
                console.log("resolved1: " + resolved);
                console.log("rejected1: " + rejected);
                callback(resolved);
            };
        };
    };

    callback(resolve, reject);

    return {
        then(handle){
            console.log("handle: " + handle);
            if(resolved != undefined && resolved){
                console.log("calling handle for resolved: " + handle);
                handle(resolved, undefined);
            }
            else if(rejected != undefined && rejected){
                console.log("calling handle rejected");
                console.log("resolved2: " + resolved);
                console.log("rejected2: " + rejected);
                //console.log("handle: " + handle);
                handle(undefined, rejected);
            }
            else{
                callbackQueue.push(handle);
            }
        }
    }

};

export default Impl;