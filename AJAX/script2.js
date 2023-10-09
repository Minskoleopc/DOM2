// sync
// function additionA(){
//     console.log("A is printed")
// }

// function additionB(){
//     console.log("B is printed")
// }

// additionA()
// additionB()


// program 2
// function additionC(){
//     setTimeout(function(){
//         console.log('C is printed')
//     },3000)
// }
// function additionD(){
//     console.log("D is printed")
// }

// additionC()
// additionD()

//  user create ====> get  id =====> get the info by id
// async  ======= sync
function getInfo(){

    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info by id")
    },1000)

}
//getInfo()


// program 4 // call back hell

function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info by id")
            },1000)
        },2000)
    },3000)
}
getInfo()



// program 5
let pro = new Promise(function(resolve,reject){
    let a = 10 
    let b  = 100 
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






