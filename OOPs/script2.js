//object literal 
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:34,
    displayName:function(){
        console.log(this.firstName +this.lastName)
    }
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:27,
    rollNo:28,
    displayName:function(){
        console.log(this.firstName +this.lastName)
    }

}

// 100 objects  700 lines
// function constructor

function Person(fn,ln,age,roll){
    this.firstName = fn
    this.lastName = ln 
    this.age = age 
    this.rollNo = roll
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amolQ = new Person("amolq","raoq",34,66)
let chinmayQ = new Person("chinmayq","deshpandeq",34,66)

console.log(amolQ)
console.log(chinmayQ)

//object__proto__ === parent.protype 

console.log(amolQ.__proto__ === Person.prototype)
console.log(chinmayQ.__proto__ === Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "Bharat"


amolQ.displayName()
chinmayQ.displayName()

console.log(amolQ.firstName)
console.log(amolQ.country)


























// dot notation and bracket notation
// console.log(amol.firstName)
// console.log(amol.age)
// console.log(amol.rollNo)
// console.log(amol.lastName)
// amol.displayName()