// Generics in TS allow you to create reusable components or functions that can work with multiple data types.

const getLength = (value:any)=>{
    return value.length
}
// the above function works fine for string but if we pass a number it will give undefined




// we can fix this by using generics

interface hasLength{
    length:number
}

function getLengthGenericsFn <T extends hasLength>(value:T){
    return value.length
}

const getLengthGenericsArrowFn = <T extends hasLength> (value:T)=>{
    return value.length
}

//calling
console.log(getLengthGenericsFn("something"))           // works fine
getLengthGenericsFn(8)                                  //throws error because we number has no property called length

