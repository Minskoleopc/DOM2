

// sync 
function additionA() {
    console.log("A is printed")
}
function additionB() {
    console.log("B is printed")
}
additionA()
additionB()

// async 
function additionC() {
    setTimeout(function () {
        console.log("C is printed")
    }, 1000)
}

function additionD() {
    console.log("D is printed")
}

additionC()
additionD()


// user created ====> get user by id =====> get info
// async =====> sync  =====> call back hell
function getInfo() {
    setTimeout(function () {
        console.log("User created")
    }, 3000)

    setTimeout(function () {
        console.log("Get id for user")
    }, 2000)

    setTimeout(function () {
        console.log("Get info")
    }, 1000)
}
//getInfo()

function getInfo() {
    setTimeout(function () {
        console.log("User created")
        setTimeout(function () {
            console.log("Get id for user")
            setTimeout(function () {
                console.log("Get info")
            }, 1000)
        }, 2000)

    }, 3000)
}
getInfo()

// Promises
// pending , reject , resolve
let pro = new Promise(function(resolve,reject){
    let a = 10 
    let b = 1
    if(a == b ){
       resolve("both are equal")
    }
    else {
        reject("both are not equal")
    }
})

pro.then(function(str){
    console.log(str)
}, function(str){
    console.log(str)
})























