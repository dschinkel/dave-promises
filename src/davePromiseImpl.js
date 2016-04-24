
var result;
var counter = 0;

var Impl = function(callback){

    callback(function(resolvedValue){
        result = resolvedValue;
    });

};

Impl.prototype.then = function(callback){
    callback(result);
}

export default Impl;
