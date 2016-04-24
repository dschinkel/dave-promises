

export default function(resolveCallback){
    //function(resolve) { resolve('hi') }
    var resolveFunction = (value) => {return value};

    return resolveCallback((resolveFunction));
};


//export default function(function(resolve) { resolve('hi') }){
//    //function(resolve) { resolve('hi') }
//
//    var value =
//};
