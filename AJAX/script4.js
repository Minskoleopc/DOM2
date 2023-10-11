
// creating a promise
// let pro = new Promise(function(resolve, reject){
//     let a = 10 
//     let b = 1

//     if(a == b){
//         resolve("Equal")
//     }
//     else {
//         reject("Not Equal")
//     }
// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2

// let pro2 = new Promise(function (resolve, reject) {
//     let names = "chinmay"
//     if (names.startsWith("C")) {
//         console.log("pass")
//         resolve([11, 22, 33])
//     }
//     else {
//         console.log("fail")
//         reject([-11, -22, -33])
//     }
// })

// pro2
//     .then(function (a) {
//         console.log(a)
//         console.log(a[0])
//     })
//     .catch(function (b) {
//         console.log(b)
//         console.log(b[0])
//     })

// program 3
// let pro3 = new Promise(function (resolve,reject) {
//     let cities = ["jaipur", "udaipur", "banglore", "chennai"]

//     if (cities.includes('Jaipur')) {
//         resolve({ firstName: "chinmay", lastName: "deshpande" })
//     }
//     else {
//         reject({ firstName: "poorva", lastName: "vyas" })
//     }
// })

// pro3.then(function(obj){
//     console.log(obj)
//     let {firstName,lastName} = obj
//     console.log(firstName)
//     console.log(lastName)
// })
// .catch(function(obj){
//     let {firstName,lastName} = obj
//     console.log(firstName)
//     console.log(lastName)
// })
// .finally(function(){
//     console.log("i will run any way")
// })

// program 4

let pro4 = new Promise(function(resolve,reject){
    let a =  10
    let b = 5
    if(a == b){
        resolve(true)
    }
    else {
        reject(false)
    }
})
pro4
.then(function(a){
    console.log(a)
    return "hello"
})
.then(function(str){
    console.log(str)
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log("i will run any way")
})



