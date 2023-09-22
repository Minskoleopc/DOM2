
// Object literal ??
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:67,
    rollNo:88,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:62,
    rollNo:48,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }

}

//amol.displayName()
//chinmay.displayName()

// function constructor()

function Person(fn,ln,ag, rn){
    this.firstName = fn 
    this.lastName = ln 
    this.age = ag
    this.rollNo = rn
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol2 = new Person("amol2","rao2",34,55)
let chinmay2 = new Person("chinmay2","deshpande",33,56)

// Every obj has one Obj.__proto__ === Parent.prototype

console.log(amol2.__proto__ === Person.prototype)
console.log(chinmay2.__proto__ === Person.prototype)


Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

Person.prototype.country = "Bharat"

console.log(amol2)
console.log(chinmay2)

amol2.displayName()
chinmay2.displayName()

console.log(amol2.firstName)
console.log(amol2.lastName)

console.log(amol2.country)
console.log(chinmay2.country)








// Es6 class 

// object create













// // retrive 
// // dot notation and bracket notation
// console.log(chinmay.firstName)
// console.log(chinmay['firstName'])

// // update 
// chinmay.lastName = "dani"
// chinmay['lastName'] = "deshpande"

// // add 
// chinmay.city = "pune"
// chinmay['city'] = "pune2"

// //delete

// delete chinmay['age'] 
// delete chinmay.city
