//Simple object with typed values
var emp;
emp = {
    id: 1,
    name: "Something",
    fulltime: false
};
var person1 = {
    name: "Ada",
    age: 30
};
var speech = {
    sayHi: function (name) { return "Hello ".concat(name); },
    sayBye: function (name) { return "Bye ".concat(name); }
};
console.log(speech.sayBye('Tom'));
