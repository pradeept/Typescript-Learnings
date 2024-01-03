interface Employee {
    name: string;
    age: number;
}

function sayHi(person: Employee) {
    console.log(`Hi ${person.name}`);
}

sayHi({ name: "Pradeep", age: 23 });


//Extending an interface

interface Person extends Employee{
    id:number
    gender: "male"|"female"                 //literal type
}

const worker: Person = {
    name:"Tom",
    age: 23,
    id:1,
    gender:"male"
}

console.log(worker)