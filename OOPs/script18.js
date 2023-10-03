// Lexical scope
// function 
// function addition() {
//     let x = 10
//     let y = 5
//     console.log(x + y)
//     //console.log(a,b)
//     function additionB() {
//         let a = 10
//         let b = 5
//         console.log(x + y)
//         console.log(a + b + x + y)
//         function additionC() {
//             let e = 10 
//             let g = 5
//             console.log(a + b + x + y)
//             console.log(e+g)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()


// program 2
// function additionD(){
//     let a = 10 
//     let b = 5
//     console.log("hello")
//     console.logo(a+b)
//     return a + b
//     console.log("bye")
// }
// let q2 = additionD()
// console.log(q2)

// program3

let x = 10 
console.log(x)

let add = function(x,y){
    return x + y
}
let q3 = add(3,4)
console.log(q3)
console.log(add)


let sub = function(x,y){
    return x - y
}


// function as a parametet to another function
function subtraction(fn,x,y){
    // let fn = function(x,y){
    //     return x - y
    // }

    let q4 = fn(x,y)
    return q4
}
let q5 = subtraction(sub,10,5)
console.log(q5)

// function as return type --- closures
function multiplication(){
    let a = 10 
    let b = 5
    return function mul(){
        return a * b
    }
}
let b =  multiplication()
console.log(b)
console.log(b())

// let b = function mul(){
//     return a * b
// }


// actual difference arrow function and function declaration


// function declaration 

function addA(x,y){
    return x + y
}
let q1 = addA(12,4)
console.log(q1)


// function expression 
let addB = function(x,y){
    return x + y
}
let q6 = addB(12,4)
console.log(q6)


// arrow function 
let addC = (x,y) =>{
    return x + y
}
let q7 = addC(12,4)
console.log(q7)
















