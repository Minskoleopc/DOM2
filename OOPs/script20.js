//  function declaration 
//  function expresson 
//  arrow function

// number as a parameter and number as a return type
function addition(x,y){
    return x + y
}
q1 = addition(12,4)
console.log(q1)

// string as parameter and string as return type 
function greet(word){
    return `Good ${word} !`
}
let q2 = greet('afternoon')
console.log(q2)

// array as parameter and array as return type

let names = ["chinmay","ram"]
function addElement(arr){
    //let arr = ["chinmay","ram"]
    arr.push("sham")
    return arr
}
let q3 = addElement(names)
console.log(q3)

// obj as parameter and obj as return type 

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
function addCity(obj){
    // let obj = {
    //     firstName:"chinmay",
    //     lastName:"deshpande"
    // }
    obj.city = "pune"
    return obj
}
let q4 = addCity(info)
console.log(q4)

// boolean as parameter and boolean as return type 
function canDrive(age,haveVehicle){
    if(age >= 18 && haveVehicle){
        return true
    }
    else {
        return false
    }
}
let q5 = canDrive(18,true)
console.log(q5)

// function a parameter 

let x = 10 
console.log(x)

let add = function(x,y){
    return x+y
}

function additionB(fn,x,y){
    // let fn = function(x,y){
    //     return x+y
    // }
    let q6 = fn(x,y)
    return q6
}
let q7 = additionB(add,10,5)
console.log(q7)


// function as return type (closures)
function subtraction(){
    let x = 10
    let y = 5
    return function(){
        return x-y
    }

}
let q8 = subtraction()
// let q8 = function(){
//     return x-y
// }
console.log(q8)
console.log(q8())


// Set as parameter and set as return type 

// Map as paramter and Map as return 


// function declartion 
function additionC(x,y){
    return x + y
}
let q33 = additionC(12,4)
console.log(q33)


// function expression 

let additionD = function(x,y){
    return x - y
}
let q44  = additionD(12,3)
console.log(q44)

// arrow function 

// let additionE = (x,y) =>{
//     return x - y
// }
// let q55  = additionE(12,3)
// console.log(q55)


let additionE = (x,y) => x - y
let q55  = additionE(12,3)
console.log(q55)

// java