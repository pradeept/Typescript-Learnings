// number type
let a: number = 10;

// number type array
let arr: number[];
arr = [1, 2, 3];

//tuple - is nothing but array with strict element types
let tup: [string, number, boolean] = ["whatever", 10, false];

//this is possible - I recon it's a bug
tup.push(1);
console.log(tup);

//Enums
const enum clothingSize {
  "small",
  "large",
  "medium",
}

let mysize: clothingSize = clothingSize.small;

// console.log(mysize);

// Functions

const func = (param1: number, param2: number): number => {
  return param1 + param2;
};

const func1 = (param1: number, param2?: number): number | undefined => {
  return param2 ? param1 * param2 : undefined;
};
console.log(func1(1));

// Objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Ram",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Type Aliase
// Remember: use Pascal casing

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let emp1: Employee = {
  id: 100,
  name: "Sham",
  retire: (date: Date) => console.log(date),
};

console.log(emp1);


// Union "|" done
// Intersection "&"
type Draggable = {
    drag: ()=>void;
}

type Resizable = {
    resize: ()=>void;
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag : ()=>{},
    resize: ()=>{}
}

//Nullable Types
// If you feel there might be null values passed as params you just have to do a check
// And you can use union type