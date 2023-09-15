
// object literal
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:45
}
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}
// 100 --- 400 lines
// Es6 class


// program 1
class PersonQ {
    firstName
    lastName
    age
    rollNo
}

let  komal = new PersonQ()
console.log(komal)
komal.firstName = "komal"
komal.lastName = "lende"
komal.age = 32
komal.rollNo = 7
console.log(komal)

class PersonQ2 {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age  = ag
        this.rollNo = rollNo
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}
let chinmay2 = new PersonQ2("chinmay2","deshpande1",23,45)
let amol2 = new PersonQ2("amol2","rao2",27,45)
let sarika2 = new PersonQ2("sarika2","rao2",28,44)
console.log(chinmay2)


sarika2.display()
amol2.display()
chinmay2.display()

// retrive .dot notation and bracket notation 
// console.log(sarika2.firstName)
// console.log(sarika2['firstName'])

// sarika2.lastName = "pansare"
// sarika2['lastName'] = "pansare2"

// sarika2.city = "pune"
// console.log(sarika2)
// console.log(amol2)

// delete sarika2.firstName
// console.log(sarika2)

// create five objects

let students = [
    new PersonQ2("amol3","rao3",34,58),
    new PersonQ2("amol4","rao4",35,59),
    new PersonQ2("amol5","rao5",36,60),
    new PersonQ2("amol6","rao6",37,62)

]

// students[0].display()
// students[1].display()
// students[2].display()
// students[3].display()

students.forEach(function(el){
    el.display()
})


class PersonQ3 {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setAge(ag){
        this.age = ag
    }

    setRoll(rollNo){
        this.rollNo = rollNo
    }

}

let amol5 = new PersonQ3()
console.log(amol5)

amol5.setAge(13)
amol5.setFirstName("chinmay")
amol5.setLastName("deshpande")
amol5.setRoll(24)
console.log(amol5)




