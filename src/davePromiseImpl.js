

function Impl(callback) {
    var callbackQueue = [],
        resolved,
        rejected;

    var resolve = value =>{
        resolved = value;
        processCAllbackQueue();
    };

    var reject = error => {
        rejected = error;
    }

    var processCAllbackQueue = () => {
        if(resolved != undefined && resolved) {
            for (let callback of callbackQueue) {
                callback(resolved);
            };
        };
    };

    callback(resolve, reject);

    return {
        then(handleResolved, handleRejected){
            if(resolved != undefined && handleResolved){
                handleResolved(resolved, undefined);
            }
            else if(rejected != undefined && rejected){
                handleRejected(rejected);
            }
            else{
                callbackQueue.push(handleResolved);
            }
        }
    }

};

export default Impl;