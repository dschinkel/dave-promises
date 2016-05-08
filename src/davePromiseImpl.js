

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

    try {
        callback(resolve, reject);
    } catch (err) {
        rejected = err;
    }

    return {

        then(handleResolved, handleRejected){
            var newValue;
            if (resolved != undefined && handleResolved) {
                newValue = handleResolved(resolved, undefined);
            }
            else if (rejected != undefined && rejected) {
                handleRejected(rejected);
            }
            else {
                callbackQueue.push(handleResolved);
            }

            var newPromise = new Impl(resolve =>{
                resolve(newValue);
            })

            return newPromise;
        }
    }
};

Impl.all = function(promises){
    var values = [];

    for (let promise of promises){
        promise.then(value =>{
            values.push(value);
        });
    }

    return {
        then(handleResolved){
            if (values != undefined && values) {
                handleResolved(values, undefined);
            }
        }
    }
}

export default Impl;