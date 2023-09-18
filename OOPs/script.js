
// // object literal 
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:33,
//     skills:["SQL","MySql"],
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(amol)
// amol.displayName()


// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:34,
//     skills:["MongoDB","Python"],
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(chinmay)
// chinmay.displayName()

// function constructor 

// function PersonB(fn,ln,ag,rn){
//     this.firstName = fn
//     this.lastName = ln 
//     this.age = ag
//     this.rollNo = rn
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol2 = new PersonB("amol2","rao2",33,55)
// let chinmay2 = new PersonB("chinmay2","deshpande2",34,55)

// console.log(amol2.firstName)
// console.log(amol2.lastName)
// console.log(amol2.age)
// console.log(amol2.rollNo)
// amol2.display()
// console.log(chinmay2)
// chinmay2.display()

// Es6 class


class PersonC {
    constructor(fn, ln, ag, rollNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
        this.display = function () {
            console.log(this.firstName + this.lastName)
        }
    }

}
let amol3 = new PersonC("amol3", "rao3")
console.log(amol3)
amol3.display()

// Object.create()
let amol4 = Object.create({})
console.log(amol4)
amol4.firstName = "amol4"
amol4.lastName = "rao4"
amol4.age = "55"
amol4.rollNo = "77"
amol4.display = function () {
    console.log(this.firstName + this.lastName)
}
console.log(amol4)

// object literal 

let audi = {
    color: "red",
    type: "green",
    displayColor: function () {
        console.log(this.color)
    }
}

// function constructor 
function Vehicle(color, type) {
    this.color = color
    this.type = type
    this.displayColor = function () {
        console.log(this.color)
    }
}

let vehicle = new vehicle("red", "sedane")
// Es6 class 

class VehicleC {
    constructor(color, type) {
        this.color = color
        this.type = type
        this.displayColor = function () {
            console.log(this.color)
        }
    }
}
let vehicleB = new vehicle("red", "sedane")
// object create

let vehicleC =  Object.create({})
vehicleC.color = "blue"
vehicleC.type = "SUV"
vehicleC.displayColor = function () {
    console.log(this.color)
}

console.log(vehicleC)