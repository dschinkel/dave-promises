


var result;
var resolved = false;

var Impl = function(callback){


    callback(function(resolvedValue){
        result = resolvedValue;
    });

    if(result){
        resolved = true;
    }
};

Impl.prototype.then = function(handler){
    if(resolved){
        return handler(result);
    }
}

export default Impl;
