
// let and const 
// program 1
let a = 10
console.log(a)
a = 300 
console.log(a)

const k = 100
//k = 40


// program
var h = 100
h = 800
console.log(h)

// scope 
// let and const are blocked  scope
// var is function scoped

// program 3
let a1 = 100
const b1 = 900
console.log(a1)
console.log(b1)


// program 4
let z = 9000
{
    let z = 900
    console.log(z) // 900
}
console.log(z) // 9000

// program 5
let m = 10 
{
    m = 500
    console.log(m) // 500
}
console.log(m) // 

// program 6
const m1 = 10 
{
    //m1 = 500
    console.log(m1) 
}
console.log(m1) 


let jj = 9999
{
    const jj = 10
    console.log(jj)
}
console.log(jj)


// var is function scoped

var y = 8989
let y3 = 89
function display(){
    var y2 = 90
    console.log(y)
    console.log(y2)
    {
        console.log(y2)
        let y3 = 900
        console.log(y3) //900
        var j = 9090
    }
    console.log(y3) // 90
    console.log(j)
}

display()
//console.log(y2)


{
    var h = 1000000
}
console.log(h)











