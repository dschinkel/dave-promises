
function Impl(resolve){
    var queue = [],
        result;

    resolve((result) => {
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