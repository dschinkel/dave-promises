var resolved;

var Impl = function(executor){

    executor(function(value){
        resolved = value;
    });

};

Impl.prototype.then = function(fulfilledHandler){
    var queue = [];

    if(resolved && queue.length > 0){
        for(let callback of queue){
            callback(resolved);
        };
    }
    else {
        queue.push(fulfilledHandler);
    }

}

export default Impl;



//function DavePromise(callback) {
//    var subs = [];
//    var result;
//
//    function resolve(...args) {
//        result = args;
//        subs.forEach(callback => callback(...result));
//    }
//    callback(resolve);
//    return {
//        then(callback) {
//            if (result) {
//                callback(...result);
//            } else {
//                subs.push(callback);
//            }
//        }
//    }
//}
//
//export default DavePromise;