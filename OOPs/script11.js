// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     salary = 9000
//     adharNo = 123
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// program 2

// // let chinmay = new Student()
// // chinmay.displayName()
// let chinmay = new Teacher()
// chinmay.displayName()
// chinmay.displaySalary()
// class Student {
//     firstName ="chinmay"
//     lastName = "deshpande"
//     adharCard = 123 
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// // let chinmay = new Student()
// // chinmay.displayName()
// let amol = new Teacher()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharCard)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()
// // Inheritance -- child reference variable ----  we can access properties and method of both 
// // child as well parent

// program 3
// class Student {
//     constructor(fn,ln, adharNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }

// }
// class Teacher extends Student {
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let amol = new Teacher("amol","rao",123)
// console.log(amol.salary)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharNo)
// amol.displayName()
// amol.displaySalary()

// program 4

class Student {
    constructor(fn, ln, adharNo) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adharNo
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}


class Teacher extends Student {
    constructor(fn, ln, adharNo, salary) {
        super(fn, ln, adharNo)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let chinmay = new Teacher("chinmay","deshpande",34,5600)
console.log(chinmay.salary)
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.adharNo)
chinmay.displayName()
chinmay.displaySalary()


















