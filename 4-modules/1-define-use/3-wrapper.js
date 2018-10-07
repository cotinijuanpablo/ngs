// function(export, modules, require. __filename, __dirname){
    //export and module are used to define the API of a module
    //require to require other moduels inside this one
    //__filename path of this file
    //__dirname the path to the folder hosting this file
//console.log(arguments);

//this export is not global, is the argument that was passed
exports.a = 42;
// this is in reality module.exports
module.exports.b = 37;

//If i do exports = something, the module.exports will not change, only the alias that is exports
//For that I need to change module.exports, lets say to a function.

let g = 1;
// this g will not be global also, because its inside the wrapper function

//the function returns something
// return module.exports;
//}





// node wraps every file in a fucntion, so argument has value
// module is a function that receives argument  and returns something