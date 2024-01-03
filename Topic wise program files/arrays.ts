//array of numbers
let ids: number[] = [1, 2, 3, 4, 6, 10];

//array of strings
let names: string[] = ["Tom", "John", "Ada", "Arthur"];

//array of boolean
let options: boolean[] = [true, false, false, true];

//array of objects
let books: object[] = [
    { name: "No Longer Human", author: "Osamu Dazai" },
    { name: "Ikigai", author: "Hector Garcia Francesc" },
    { name: "The Monk who sold his ferrari", author: "Robin Sharma" },
];

//any is basically reverting back to js
let arr: any = [
    1,
    "Tom",
    { name: "The Monk who sold his ferrari", author: "Robin Sharma" },
];

//TS POWER

// Union types to define more than one type
let person: (string | number | boolean)[];

person = [1, "Tom", true];
person.push(2, "Arthur", false);

// NOTE: It is not always necessary to state type explicitly. TS will infer datatype if we simply assign it a value


