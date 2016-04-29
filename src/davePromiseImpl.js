
function Impl(executor){
    var queue = [],
        result;

    executor((result) => {
        for(let callback of queue){
            callback(result);
        };
    });

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
