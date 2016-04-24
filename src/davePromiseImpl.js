

export default function(callback){
    //function(resolve) { resolve('hi') }
    var resolveIt = (value) => {return value};

    return callback((resolveIt));
};

