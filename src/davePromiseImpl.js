

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
        //processCAllbackQueue();
    }

    var processCAllbackQueue = () => {
        if(resolved != undefined && resolved){
            for(let callback of callbackQueue){
                callback(resolved, undefined);
            };
        }else if(resolved === undefined || !resolved && rejected != undefined && rejcted){
            callback(undefined, rejected);
        }
    }

    callback(resolve, reject);

    return {
        then(handle){
            if(resolved != undefined && resolved){
               // handle(resolved, undefined);
            }
            else if(rejected != undefined && rejected ){
                handle(null, rejected);
            }
            else{
                callbackQueue.push(handle);
            }
        }
    }
};

export default Impl;