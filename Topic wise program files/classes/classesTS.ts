// In TS we can define classes as:

class Person {
    name: string;
    id: number;

    constructor(n: string, id: number) {
        this.name = n;
        this.id = id;
    }
}

let p1 = new Person('Tom',10);
console.log(p1);


