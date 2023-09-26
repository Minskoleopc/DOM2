

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
console.log(info.lastName)
console.log(info.firstName)
info.firstName = "chinmay D"


let info2 = {
    firstName:undefined,
    lastName:undefined
}

console.log(info2.firstName)
console.log(info2.lastName)
info2.firstName = undefined

class PersonF {
    set first_name(fn){
        this.firstName = fn
    }

    get first_name(){
        return this.firstName
    }

    set last_name(ln){
        this.lastName = ln
    }

    get last_name(){
        return this.lastName
    }
}

let amol = new PersonF()

amol.first_name = "amolF"
console.log(amol.first_name)


// program 2
class PersonG {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = age 
        this.rollNo  = rollNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
    displayAge(){
        //console.log(this.age)
        return this.age
    }
}

let  amolG = new PersonG("amolG","raoG",33,41)
let  amolG2 = new PersonG("amolG2","raoG2",36,42)
let  amolG3 = new PersonG("amolG3","raoG3",31,43)
let  amolG4 = new PersonG("amolG4","raoG4",23,44)
let  amolG5 = new PersonG("amolG5","raoG5",33,45)

// amolG.displayAge()
// amolG2.displayName()

let students = [amolG,amolG2,amolG3,amolG4,amolG5]
students.forEach(function(el){
    el.displayAge()
    el.displayName()
})

console.log(amolG5)
students.forEach(function(el){
    el.city = "pune"
})
console.log(students)

let total = students.reduce(function(acc,el){
    return acc + el.displayAge()
},0)

console.log(total/students.length)


// program 2

let studentsB = [
    new PersonG("amolG","raoG",38,41),
    new PersonG("amolB","raoE",37,42),
    new PersonG("amolF","raoQ",35,44),
    new PersonG("amolH","raoE2",31,45),
    new PersonG("amolG","raoE1",32,44),
]
console.log(studentsB[0].displayAge())


let studentsC = {
    student1:new PersonG("amolG","raoG",38,41),
    student2:new PersonG("amolQ","raoW",31,41),
    student3:new PersonG("amolY","raoP",32,41),
    student4:new PersonG("amolK","raoJ",34,41),
    student5:new PersonG("amolL","raoE",38,41)
}

for(let key in studentsC){
   //console.log(key)
   studentsC[key].displayName()
}


