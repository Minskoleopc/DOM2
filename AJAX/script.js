// function additionA(){
//     console.log("A is printed")
// }

// function additionB(){
//     console.log("B is printed")
// }
// additionB()
// additionA()

// program 2

// async
// function additionC(){
//     // this function will execute after 3 seconds 
//     setTimeout(function(){
//         console.log("function C is printed")
//     },3000)

// }
// function additionD(){
//     console.log("function D is printed")
// }

// additionC()
// additionD()

// program 3
// user created ====> get id for user =====> get info for user
function getUserInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id for user")
    }, 2000)

    setTimeout(function () {
        console.log("get info for user")
    }, 1000)

}
//getUserInfo()
// async code -----> synchronously??
// call back hell
function getUserInfo2() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id for user")
            setTimeout(function () {
                console.log("get info for user")
            }, 1000)
        }, 2000)
    }, 3000)
}
getUserInfo2()

// promises -------> 
// async code --- sychronously removing call back function 

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 100
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye") 
    }
})
// consuming the promise
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})
// fri sat sun 
// sql 
// typescript 
// react js 
// java 
// django 
// selenium
// html css
// cypress
// playwright
// javascript - projects

















