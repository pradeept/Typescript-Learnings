// Narrowing is basically checking type of param passed and returning accordingly

const narrowingFn = (value: string | number) => {
    if(typeof value === 'string'){
        return "It is string"
    }else if(typeof value === "number"){
        return 1
    }else {
        //anyways when we try to assign param value other than string and number we get error
        // this is just to log to console
        return "Invalid type"
    }
}

console.log(narrowingFn("Hello"))  // will work fine
console.log(narrowingFn(true))  // will throw error

