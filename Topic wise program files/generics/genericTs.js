// Generics in TS allow you to create reusable components or functions that can work with multiple data types.
var getLength = function (value) {
    return value.length;
};
function getLengthGenericsFn(value) {
    return value.length;
}
var getLengthGenericsArrowFn = function (value) {
    return value.length;
};
//calling
console.log(getLengthGenericsFn("something")); // works fine
getLengthGenericsFn(8); //throws error because we number has no property called length
