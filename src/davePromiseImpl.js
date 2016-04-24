


var result;
var resolved = false;

var impl = function(callback){

    callback(function(resolvedValue){
        result = resolvedValue;
    });

    if(result){
        resolved = true;
    }
};

impl.prototype.then = function(handler){
    if(resolved){
        return handler(result);
    }
}

export default impl;
