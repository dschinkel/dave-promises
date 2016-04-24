


var result;
var resolved = false;

const impl = function(callback){

    callback(function(resolvedValue){
        result = resolvedValue;
    });

    //function(resolve) { resolve('hi') }
    /*
        function((resolve) => {return value}){

            resolve('hi');
        }
     */

    if(result){
        resolved = true;
    }
};

impl.then = function(handler){
    if(resolved){
        return handler(result);
    }

}

export default impl;
