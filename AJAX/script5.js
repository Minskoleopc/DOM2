// program 1

// let pro = new Promise(function(resolve, reject){
//     let a = 10 
//     let b = 10

//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// program 2
// let pro2 = new Promise(function(resolve,reject){
//     let firstName = "chinmay"
//     if(firstName.startsWith('C')){
//         resolve([11,22,33])
//     }
//     else {
//         reject[-11,-22,-33]
//     }
// })
// pro2
// .then(function(ae){
//     console.log(ae)
//     console.log(ae[2])
// })
// .catch(function(ae2){
//     console.log(ae2)
//     console.log(ae2[1])
// })

// program 3
// let pro3 = new Promise(function(resolve,reject){
//     let cities = ["pune","nagpur","banglore"]
//     if(cities.includes("Pune")){
//         resolve({firstName:"chinmay",lastName:"deshpande"})
//     }
//     else {
//         reject({firstName:"poorva",lastName:"vyas"})
//     }

// })

// pro3
// .then(function({firstName,lastName}){
//     // console.log(obj)
//     // let {firstName,lastName} = obj
//     console.log(firstName)
//     console.log(lastName)
// })
// .catch(function({firstName,lastName}){
//     console.log(firstName)
//     console.log(lastName)
// })
// .finally(function(){
//     console.log('I will always run')
// })


// program 4 

let pro4 = new Promise(function(resolve,reject){
    let a = 10 
    let b =  1
    if(a == b){
        resolve("equal")
    }
    else {
        reject("not equal")
    }
})
pro4
.then(function(str){
    console.log(str)
    return "proceed"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always run")
})




