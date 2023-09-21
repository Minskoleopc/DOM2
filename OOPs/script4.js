
// Object literal 


// let amol = { 
//     firstName:"amol",
//     lastName :"rao",
//     age:23,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     } 
// }

// console.log(amol.firstName)
// console.log(amol.lastName)

// function constructor 

function Person(fn,ln, ag, rn){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag 
    this.rollNo = rn
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amolA = new Person("amol","rao",23,44)
let chinmayA = new Person("chinmay","deshpadne2",44,55)


// Every object has __proto__ === Parent.prototype

console.log(amolA.__proto__ === Person.prototype)
console.log(chinmayA.__proto__ === Person.prototype)


console.log(amolA)
console.log(chinmayA)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "india"

amolA.displayName()
chinmayA.displayName()

console.log(amolA.country)
console.log(chinmayA.country)


console.log(amolA instanceof Person)
console.log(chinmayA instanceof Person)


console.log(amolA.hasOwnProperty("firstName"))
console.log(amolA.hasOwnProperty("country"))


// Es6 class 


class PersonB { 
    constructor(fn,ln ,ag, rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName )
        // }
    }

    displayName(){
       console.log(this.firstName + this.lastName) 
    }

}

let amolC = new PersonB("amolC","raoC",23,55)
let sarikaC = new PersonB("sarikaC","pansareC",21,52)

console.log(amolC)
console.log(sarikaC)

amolC.displayName()
sarikaC.displayName()

console.log(amolC instanceof PersonB)
console.log(sarikaC instanceof PersonB)

console.log(amolC.__proto__ === PersonB.prototype)
console.log(sarikaCC.__proto__ === PersonB.prototype)

// Where to define a property to make it common

// Object.create()