

function Impl(callback) {
    var callbackQueue = [],
        resolved,
        rejected;

    var resolve = value => {
        resolved = value;
        processCallbackQueue();
    };

    var reject = error => {
        rejected = error;
    }

    var processCallbackQueue = () => {
        if(resolved) {
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

        then(handleResolved, handleRejected) {
            var newValue;
            if (resolved) {
                newValue = handleResolved(resolved, undefined);
            }
            else if (rejected) {
                handleRejected(rejected);
            }
            else {
                callbackQueue.push(handleResolved);
            }

            return new Impl(resolve => resolve(newValue));
        }
    }
};

Impl.all = function(promises) {
    var values = [];

    for (let promise of promises) {
        promise.then(value => {
            values.push(value);
        });
    }

    return {
        then(handleResolved) {
            if (values != undefined && values) {
                handleResolved(values, undefined);
            }
        }
    }
}

export default Impl;