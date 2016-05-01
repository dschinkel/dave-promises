

function Impl(callback) {
    var queue = [],
        result;

    var resolve = function(value){
        result = value;
        for(let callback of queue){
            callback(result);
        };
    }

    callback(resolve);

    return {
        then(handle){
            if(result){
                handle(result);
            }
            else {
                queue.push(handle);
            }
        }
    }
};

export default Impl;