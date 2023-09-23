// object literal 

let amol = {
    firstName: "amol",
    lastName: "rao",
    age: 29,
    rollNo: 45,
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(amol)

//function constructor 

function Person(fn, ln, ag, rollNo) {
    this.firstName = fn
    this.lastName = ln
    this.rollNo = rollNo
    this.age = ag
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let amolB = new Person("amol","rao",23,45)
let chinmayB = new Person("chinmay","deshpande",25,47)

// Every object has __proto__ === Parent.prototype

console.log(amolB.__proto__ === Person.prototype)
console.log(chinmayB.__proto__=== Person.prototype)

// adding method to prototype
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

// adding property to prototype 

Person.prototype.country = "India"
console.log(amolB)
console.log(chinmayB)

amolB.displayName()
chinmayB.displayName()

console.log(amolB)
console.log(chinmayB)

console.log(amolB.country)
console.log(chinmayB.country)

// instanceof()
console.log(amolB instanceof Person)
console.log(chinmayB instanceof Person)

// hasOwnProperty()

console.log(amolB.hasOwnProperty("firstName"))
console.log(amolB.hasOwnProperty("lastName"))
console.log(amolB.hasOwnProperty("country"))

// Es6 class

class PersonB {
    constructor(fn,ln,age,roll){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age 
        this.roll = roll
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let amolC = new PersonB("amolC","raoC",34,66)
let mayuriC = new PersonB("mayuriC","rao",34,56)

amolC.displayName()
mayuriC.displayName()

console.log(amolC)
console.log(mayuriC)

console.log(mayuriC.__proto__ === PersonB.prototype)
console.log(amolC.__proto__ === PersonB.prototype)


console.log(mayuriC instanceof PersonB)
console.log(mayuriC instanceof PersonB)

// 8:30 am







// object.create()