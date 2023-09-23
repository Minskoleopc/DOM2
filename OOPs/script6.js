// object literal 

let amol = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:35, 
    rollNo:55,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
amol.displayName()
// function constructor 

function Person(fn,ln,age,rn){
    this.firstName = fn
    this.lastName = ln 
    this.rollNo = rn 
    this.age = age
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol2 = new Person("amol2","rao2",34,55)
let chinmay2 = new Person("chinmay2","deshpande",34,55)


Person.prototype.displayName = function(){
    console.log(this.firstName +  this.lastName)
}

Person.prototype.country = "india"

console.log(amol2)
console.log(chinmay2)

amol2.displayName()
chinmay2.displayName()

console.log(amol2.country)
console.log(chinmay2.country)

console.log(amol2.__proto__ === Person.prototype)
console.log(chinmay2.__proto__ === Person.prototype)

console.log(amol2 instanceof Person)
console.log(chinmay2 instanceof Person)

console.log(amol2.hasOwnProperty("country"))
console.log(amol2.hasOwnProperty("firstName"))


// es6 class 
class PersonC {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
        this.rollNo = rollNo
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

let amolC =  new PersonC("amolC","raoC",34,56)
let chinmayC =  new PersonC("chinmayC","DeshpandeC",34,56)

console.log(amolC)
console.log(chinmayC)

amolC.displayName()
chinmayC.displayName()

// Object.create





// let amolD = Object.create({})
// console.log(amolD)

// amolD.firstName = "amolD"
// amolD.lastName = "raoD"
// amolD.age = 33
// amolD.rollNo = 44
// amolD.displayName= function(){
//     console.log(this.firstName + this.lastName)
// }
// amolD.displayName()
let obj = {
    init:function(fn,ln,rollNo, age){
        this.firstName = fn 
        this.lastName = ln 
        this.rollNo = rollNo
        this.age = age
    },
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}


let amolD = Object.create(obj)
console.log(amolD)
amolD.init("amolD","raoD",34,55)
amolD.displayName()
console.log(amolD)












// object.create()