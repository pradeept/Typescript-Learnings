
function greeter(name:string):string{
    return `Hello ${name}`
}
console.log(greeter("Ram"))


//ES6 Arrow functions 

const sayMyName = (name:string):string => {
    return `I am ${name}. But my real name is Walter White :)`
}
console.log(sayMyName("Tom"))


// Function with optional param 
// we use ? to indicate a param as optional 

const weAre = (name:string, noMembers?:string | number):string =>{
    return `We Are ${name}.`+` We are ${noMembers} members.`
}
console.log(weAre("Shelby",5))


// Function that returns void 

const iReturnVoid =():void=>{
    console.log("I return nothing!!");
}


//Defining a function signature and not defining it.

let funcSignature : (name:string)=>void ; 

funcSignature = (name) =>{
    console.log("Hello "+name);
}


