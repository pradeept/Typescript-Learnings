function greeter(name) {
    return "Hello ".concat(name);
}
console.log(greeter("Ram"));
//ES6 Arrow functions 
var sayMyName = function (name) {
    return "I am ".concat(name, ". But my real name is Walter White :)");
};
console.log(sayMyName("Tom"));
// Function with optional param 
// we use ? to indicate a param as optional 
var weAre = function (name, noMembers) {
    return "We Are ".concat(name, ".") + " We are ".concat(noMembers, " members.");
};
console.log(weAre("Shelby", 5));
// Function that returns void 
var iReturnVoid = function () {
    console.log("I return nothing!!");
};
