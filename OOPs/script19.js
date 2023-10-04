
// string as a parameter and string as return type 
// function declaration 
// function expression 
// arrow function 

function greet(word) {
    return `good ${word} !`
}
let q1 = greet("morning")
console.log(q1)
let q2 = greet("afternoon")
console.log(q2)

// array as parameter and array as return type 
let names = ["chinmay", "mayuri", "ram", "sham", "satish"]
function addElement(arr) {
    //let arr = ["chinmay","mayuri","ram","sham","satish"]
    arr.push("amol")
    return arr
}
let q3 = addElement(names)
console.log(q3)

// object as parameter and object as return 
let info = {
    firstName: "chinmay",
    lastName: "deshpande"
}
function addCity(obj) {
    obj.city = "pune"
    return obj
}
let q4 = addCity(info)
console.log(q4)

// boolean as paramter and boolean as return type 
function canDrive(age, vehicleAvailabe) {
    if (age >= 18 && vehicleAvailabe) {
        return true
    }
}
let q5 = canDrive(18, true)
console.log(q5)

// function as a parameter and function as return 
// function expression 
let add = function (x, y) {
    return x + y
}

// function as a paramet to another function  
function addition(fn, x, y) {
    // let fn = function(x,y){
    //     return x + y
    // }
    let q6 = fn(x, y)
    return q6
}
let q7 = addition(add, 12, 4)
console.log(q7)

// function as a return type to another function 
function subtraction() {
    let s = 8
    let t = 4
    return function () {
        return s - t
    }

}
let q8 = subtraction()
console.log(q8)
// let q8 = function(){
//     return s-t
// }
console.log(q8())

// number as a parameter and number as return type 
function addw(x, y) {
    return x + y
}
w2 = addw(11, 22)
console.log(w2)


// set as parameter and set as return type 


// map as parameter and map as return type 



let q111 = function (x, y) {
    return x - y
}
let q222 = q111(114, 4)


// let q1112 =  (x,y) => {
//     return x - y
// }
// let q2222 = q1112(114,4)
// console.log(q2222)

let g1 = (x, y) => x - y
let q2222 = g1(114, 4)
console.log(q2222)

// difference between array function and function expression






























