type StringOrNumber = string | number;


//creating a type
type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person10: PersonObject = {
  name: 'John',
  id: 1,
};

console.log(person10)

// creating another type

const person2: PersonObject = {
  name: 'Delia',
  id: 2,
};

console.log(person2)


// A function that takes person type as pram type

const sayHello = (person: PersonObject) => {
  return 'Hi ' + person.name;
};


// A function that takes person type as param type

const sayGoodbye = (person: PersonObject) => {
  return 'See you ' + person.name;
};

console.log(sayHello({name:'Ram',id:0}));
console.log(sayGoodbye({name:'Sham',id:100}));

// Extending types using intersection

type Animal = {
  name:string
}

type bear = Animal &{
  honey: boolean
}

const Bear : bear = {
  name:"Winnie",
  honey:true
}

console.log(Bear)