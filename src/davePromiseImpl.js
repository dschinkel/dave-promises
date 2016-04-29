
function Impl(executor){
    var queue = [],
        result;

    executor(function(value){
        result = value;
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

/*
     Questions
     - dave didn't check for queue length
     - exports.default vs. export default.
     - why doesn't return function then() work?  but { then() does?
  */

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