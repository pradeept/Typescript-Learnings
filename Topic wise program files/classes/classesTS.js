// In TS we can define classes as:
var Person = /** @class */ (function () {
    function Person(n, id) {
        this.name = n;
        this.id = id;
    }
    return Person;
}());
var p1 = new Person('Tom', 10);
console.log(p1);
