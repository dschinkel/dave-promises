

function Impl(callback) {
    var queue = [],
        result,
        reject;

    var resolve = function(value){
        result = value;
        for(let callback of queue){
            if(result){
                callback(result, null);
            }
        };
    };

    var reject = function(error){
        reject = error;
    }

    callback(resolve, reject);

    return {
        then(handle){
            if(result){
                handle(result);
            }
            else{
                queue.push(handle);
            }
        }
    }
};

export default Impl;