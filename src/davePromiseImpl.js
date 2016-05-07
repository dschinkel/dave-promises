

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
                console.log("calling this callback from the callback queue:" + callback);
                callback(resolved);
            };
        };
    };

    callback(resolve, reject);

    return {
        then(handle){
            if(resolved != undefined && resolved){
                console.log("calling handle resolved");
                handle(resolved, undefined);
            }
            else if(rejected != undefined && rejected){
                console.log("calling handle rejected");
                handle(undefined, rejected);
            }
            else{
                callbackQueue.push(handle);
            }
        }
    }
};

export default Impl;