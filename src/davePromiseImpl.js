
var result;

var Impl = function(callback){

    callback(function(value){
        result = value;
    });

};

Impl.prototype.then = function(callback){
    callback(result);
}

export default Impl;
