

function Impl(callback) {
    var queue = [],
        result,
        rejectError;

    var resolve = value =>{
        result = value;
        processCAllbackQueue();
    };

    var reject = error => {
        rejectError = error;
        processCAllbackQueue();
    }

    var processCAllbackQueue = () => {
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