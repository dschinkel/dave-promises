

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


//function Impl(executor){
//    var queue = [],
//        result,
//        reject;
//
//    executor((result, reject) => {
//        for(let callback of queue){
//            try {
//                callback(result);
//            } catch(error) {
//                callback(null, reject);
//            }
//        };
//    });
//
//    return {
//        then(handle, err){
//            if(result){
//                handle(result);
//            }
//            else if(reject){
//                err(reject);
//            }
//            else {
//                queue.push(handle);
//            }
//        }
//    }
//};
//
//export default Impl;