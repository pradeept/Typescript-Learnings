//Simple object with typed values

let emp:{
    id:number,
    name: string,
    fulltime:boolean
}

emp = {
    id:1,
    name:"Something",
    fulltime:false
}

// OR we can use signature

interface Person  {
    name:string,
    age: number
}

let person1:Person = {
    name:"Ada",
    age:30
}


//defining function properties

interface Speech{
    sayHi(name:string):string,
    sayBye(name:string):string
}

let speech:Speech ={
    sayHi: (name:string)=>{return `Hello ${name}`},
    sayBye: (name:string)=>{return `Bye ${name}`}
}

console.log(speech.sayBye('Tom'));
