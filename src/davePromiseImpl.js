
var result;

var Impl = (function(callback){
    callback(function(resolvedValue){
        result = resolvedValue;
    });
});

Impl.prototype.then = function(handler){
    return handler(result);
}

export default Impl;
