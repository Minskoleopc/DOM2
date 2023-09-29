

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
//     adharNo = 123
//     salary = 1000

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }

// }

// let chinmay2 = new Teacher()
// console.log(chinmay2.firstName)
// console.log(chinmay2.lastName)
// console.log(chinmay2.adharNo)
// console.log(chinmay2.salary)

// let chinmay = new Student()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.adharNo)
// chinmay.displayName()

// program 2 
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
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
// let chinmay3 =  new Teacher()
// console.log(chinmay3.firstName)
// console.log(chinmay3.lastName)
// console.log(chinmay3.adharNo)
// console.log(chinmay3.salary)

// chinmay3.displayName()
// chinmay3.displaySalary()


// // program 3

// class Student {
//     constructor(fn,ln,adharno){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharno = adharno
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class Teacher  extends Student{
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let chinmay4 = new Teacher("chinmay4","deshpande4",123)
// console.log(chinmay4.firstName)
// console.log(chinmay4.lastName)
// console.log(chinmay4.salary)
// console.log(chinmay4.adharno)
// chinmay4.displayName()
// chinmay4.displaySalary()


// program 4

class Student {
    constructor(fn, ln, adharno) {
        this.firstName = fn
        this.lastName = ln
        this.adharno = adharno
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    constructor(fn, ln, adharno, salary) {
        super(fn, ln, adharno)
        this.salary = salary
    }
    displaySalary() {
        console.log(this.salary)
    }

}

let chinmay5 = new Teacher("chinmay5","deshpande5","123",12312312)

console.log(chinmay5.firstName)
console.log(chinmay5.lastName)
console.log(chinmay5.adharno)
console.log(chinmay5.salary)

chinmay5.displayName()
chinmay5.displaySalary()