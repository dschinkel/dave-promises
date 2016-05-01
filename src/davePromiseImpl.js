

function Impl(callback) {
    var queue = [],
        result,
        rejectError;

    var resolve = function(value){
        result = value;
        processQueue();
    };

    var reject = function(error){
        rejectError = error;
        processQueue();
    }

    function processQueue(){

        for(let callback of queue){

            if(result){
                callback(result, null);
            }

            if(rejectError){
                callback(null, rejectError);
            }
        };
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