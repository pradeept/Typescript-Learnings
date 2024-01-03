var person1 = {
    name: 'John',
    id: 1,
};
console.log(person1);
// creating another type
var person2 = {
    name: 'Delia',
    id: 2,
};
console.log(person2);
// A function that takes person type as pram type
var sayHello = function (person) {
    return 'Hi ' + person.name;
};
// A function that takes person type as param type
var sayGoodbye = function (person) {
    return 'See you ' + person.name;
};
console.log(sayHello({ name: 'Ram', id: 0 }));
console.log(sayGoodbye({ name: 'Sham', id: 100 }));
var Bear = {
    name: "Winnie",
    honey: true
};
console.log(Bear);
