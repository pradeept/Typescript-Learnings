//array of numbers
var ids = [1, 2, 3, 4, 6, 10];
//array of strings
var names = ["Tom", "John", "Ada", "Arthur"];
//array of boolean
var options = [true, false, false, true];
//array of objects
var books = [
    { name: "No Longer Human", author: "Osamu Dazai" },
    { name: "Ikigai", author: "Hector Garcia Francesc" },
    { name: "The Monk who sold his ferrari", author: "Robin Sharma" },
];
//any is basically reverting back to js
var arr = [
    1,
    "Tom",
    { name: "The Monk who sold his ferrari", author: "Robin Sharma" },
];
//TS POWER
// Union types to define more than one type
var person;
person = [1, "Tom", true];
person.push(2, "Arthur", false);
// NOTE: It is not always necessary to state type explicitly. TS will infer datatype if we simply assign it a value
