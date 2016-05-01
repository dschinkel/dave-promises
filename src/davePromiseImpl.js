

function Impl(callback) {
    var queue = [],
        result,
        rejectError;

    var resolve = value =>{
        result = value;
        processQueue();
    };

    var reject = error => {
        rejectError = error;
        processQueue();
    }

    var processQueue = () => {

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