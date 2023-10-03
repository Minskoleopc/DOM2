// // lexical scope


// function addition() {
//     let a = 10
//     let b = 5
//     console.log(a + b)
//     //console.log(x+y)
//     function addition2() {
//         let x = 8
//         let y = 4
//         console.log(a + b)
//         console.log(x + y)
//         function addition3() {
//             console.log(a + b + x + y)
//         }
//         addition3()
//     }
//     addition2()
// }
// addition()

// // closure
// function addition4(){
//     let a = 100
//     let b = 50 
//     console.log(a+b)
//     return "hello"
//     console.log("bye")
// }
// q1 = addition4()
// console.log(q1)

//-----------------------------------------------
let sub = function(x,y){
    return x - y
}
function subtraction(fn,x,y){
    // let fn = function(x,y){
    //     return x - y
    // }
    let q2 = fn(x,y)
    return q2
}
let q3 = subtraction(sub,10,5)
console.log(q3)

// closures
function multiplication(){
    let a = 10 
    let b = 5

    return function(){
        return a * b
    }
}

let q5 =  multiplication()
// let q5 = function(){
//     return a * b
// }
console.log(q5())


// 7:30pm
// actual difference arrow and function expression
// java development , selenium(python + java) , cypress , playwright
// reactjs , typescript , python , datascience , sql




