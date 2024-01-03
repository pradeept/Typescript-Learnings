"use strict";
let a = 10;
let arr;
arr = [1, 2, 3];
let tup = ["whatever", 10, false];
tup.push(1);
console.log(tup);
let mysize = 0;
const func = (param1, param2) => {
    return param1 + param2;
};
const func1 = (param1, param2) => {
    return param2 ? param1 * param2 : undefined;
};
console.log(func1(1));
let employee = {
    id: 1,
    name: "Ram",
    retire: (date) => {
        console.log(date);
    },
};
let emp1 = {
    id: 100,
    name: "Sham",
    retire: (date) => console.log(date),
};
console.log(emp1);
let textBox = {
    drag: () => { },
    resize: () => { }
};
