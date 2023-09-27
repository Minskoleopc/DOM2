let amol = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:10,
    rollNo:34
}
console.log(amol.firstName)
console.log(amol.lastName)
amol.firstName = "amolR"
// program 2
class PersonD {
    set first_name(fn){
        this.firstName = fn
    }
    set last_name(ln){
        this.lastName = ln 
    }
    get first_name(){
        return this.firstName
    }
    get last_name(){
        return this.lastName
    }

}
let amolD = new PersonD()
console.log(amolD)
// setting the property
amolD.first_name = "amolrr"
// retriving the property
console.log(amolD.first_name)
amolD.lastName = "Raorr"
console.log(amolD.lastName)

// program 2
class PersonK  {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
        this.rollNo = rollNo
    }

    displayName(){
        console.log(this.firstName+ this.lastName)
    }

    displayAge(){
        console.log(this.age)
    }
}

let chinmay1 = new PersonK("chinmay1","dehpande1",23,45)
let chinmay2 = new PersonK("chinmay2","dehpande2",24,46)
let chinmay3 = new PersonK("chinmay3","dehpande3",25,47)
let chinmay4 = new PersonK("chinmay4","dehpande4",26,48)
let chinmay5 = new PersonK("chinmay5","dehpande5",27,49)

// chinmay1.displayAge()
// chinmay1.displayName()

let students = [chinmay1,chinmay2,chinmay3,chinmay4,chinmay5]
students.forEach(function(el){
   el.displayAge()
   el.displayName()
})

let studentsB  = [
    new PersonK("chinmay1","dehpande1",23,45),
    new PersonK("chinmay2","dehpande2",24,46),
    new PersonK("chinmay3","dehpande3",25,47),
    new PersonK("chinmay4","dehpande4",26,48),
    new PersonK("chinmay5","dehpande5",27,49)
]
studentsB.forEach(function(el,index,arr){
    el.displayAge()
    el.displayName()
})

studentsB.forEach(function(el){
    el.city = "pune"
})
console.log(studentsB)

let studentsC = {
    student1:new PersonK("chinmay1","dehpande1",23,45),
    student2:new PersonK("chinmay2","dehpande2",24,46),
    student3:new PersonK("chinmay3","dehpande3",25,47),
    student4:new PersonK("chinmay4","dehpande4",26,48),
    student5:new PersonK("chinmay5","dehpande5",27,49)
}

for(let key in studentsC){
    console.log(key)
    studentsC[key].displayAge()
    studentsC[key].displayName()
}





