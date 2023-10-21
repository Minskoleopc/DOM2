
// listOf user ---------  id ------------ single user api


// 2 --- sec
// https://reqres.in/api/users/2
// https://reqres.in/api/users/3
// https://reqres.in/api/users/4
// https://reqres.in/api/users/5
// https://reqres.in/api/users/6



// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

// with then block , with async  await ----- with actual apis 
// function fetchData(id){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(id % 2 == 0){
//                 resolve("Pass")
//             }
//             else {
//                 reject("Fail")
//             }
//         },1000)
//     })
// }
// Promise.all([fetchData(2),fetchData(4),fetchData(6)])
// .then(function(result){
//     console.log(result)
// })
// .catch(function(fail){
//     console.log(fail)
// })

// Promise.race()


function fetchData(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve("Pass 1")
            }
            else {
                reject("Fail 1")
            }
        },1000)
    })
}

function fetchData2(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve("Pass 2")
            }
            else {
                reject("Fail 2")
            }
        },2000)
    })
}


function fetchData3(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve("Pass 3")
            }
            else {
                reject("Fail 3")
            }
        },3000)
    })
}

// resolve , reject or case those who executed first , the output will be shown

// Promise.race([fetchData(3),fetchData2(4)])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// Program.allSettled()

// Promise.allSettled([fetchData(3),fetchData2(5),fetchData3(8)])
// .then(function(result){
//     console.log(result)
// })


// Promise.any()

Promise.any([fetchData2(3),fetchData2(5),fetchData3(7),fetchData(5),fetchData2(4)])
.then(function(result){
    console.log(result)
})











