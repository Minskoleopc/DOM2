
// Es6 class 

class Person {
    firstName
    lastName 
    age 
    rollNo
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let amol = new Person()
console.log(amol)
amol.displayName()
amol.firstName = "amol R"
amol.lastName = "Rao"
amol.age = 13
amol.rollNo = 56
console.log(amol)
amol.displayName()

// program 2

class PersonB {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag
        this.rollNo = rollNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amolB = new PersonB("amolB","raoB",35,64)
console.log(amolB)
amolB.displayName()

// program 3
class PersonC {

    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }

    setRollNo(rn){
        this.rollNo = rn
    }
}


let amolC = new PersonC()
console.log(amolC)
amolC.setFirstName("amolC")
amolC.setLastName("raoC")
amolC.setAge(34)
amolC.setRollNo(55)
console.log(amolC)

// program 4 
// let info = {
//     firstName: "amol",
//     lastName :'deshpande'
// }
// console.log(info.firstName)
// info.firstName = "chinmay"
// console.log(info)


class PersonD {
    set setFirstName(fn){
        this.firstName = fn
    }
    set setLastName(ln){
        this.lastName = ln
    }
    set setAge(ag){
        this.age = ag
    }
    set setRollNo (rn){
        this.rollNo = rn
    }


    get setFirstName(){
        return this.firstName
    }
    get setLastName(){
        return this.lastName
    }
    get setAge(){
        return this.age
    }
    get setRollNo (){
        return this.rollNo   
    }

}

let amolD = new PersonD()
amolD.setFirstName  = "amolR"
amolD.setLastName  = "Rao"
amolD.setAge  = "24"
amolD.rollNo  = "456"
console.log(amolD)

console.log(amolD.setFirstName)












