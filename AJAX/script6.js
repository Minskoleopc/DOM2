// let pro5 = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 5

//     if (a == b) {
//         resolve("pass")
//     }
//     else {
//         reject("fail")
//     }
// })

// pro5.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })

// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
//     return "bye"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })


// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("getId")
//     },2000)


//     setTimeout(function(){
//         console.log("getInfo")
//     },1000)
// }
// getInfo()




// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("getId")
//             setTimeout(function(){
//                 console.log("getInfo")
//             },1000)
//         },2000)


//     },3000)
// }
// getInfo()



function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        },3000)
    })
}

function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get id")
        },2000)
    })
}

function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get info")
        },1000)
    })
}

// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("Error")
// })
// .finally(function(){
//     console.log("I will execute any time ")
// })

async function getinfo(){
    let str = await createUser()
    console.log(str)
    let str2 = await getId()
    console.log(str2)
    let str3 = await getInfo()
    console.log(str3)
}
getinfo()