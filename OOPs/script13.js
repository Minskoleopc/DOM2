// single inheritance 
// program 1
// class Student {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }
// class Teacher extends Student {
//     constructor(fn,ln,salary){
//         super(fn,ln)
//         this.salary = salary
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amol = new Teacher("amol","rao",1000)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()

// program 2  // multi-level

class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName+ this.lastName)
    }
}
class Father extends GrandFather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname +this.lastName) 
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }

    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("monohar","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
console.log(chinmay.fname)

chinmay.displaySName()
chinmay.displayGName()
chinmay.displayFName()

// program 3

class Mother {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayMName(){
        console.log(this.firstName + this.lastName)
    }
}

class SONm extends Mother {
    constructor(fn,ln,sname){
        super(fn,ln)
        this.sname = sname
    }

    displaySname(){
        console.log(this.sname+ this.lastName)
    }

}

class Daughterm extends Mother{
    constructor(fn,ln,dname){
        super(fn,ln)
        this.dname = dname
    }

    displayDname(){
        console.log(this.dname + this.lastName)
    }

} 

let chinmaya = new SONm("kanchan","deshpande","chinmay")
chinmaya.displayMName()
chinmaya.displaySname()

let gaurim = new Daughterm("kanchan","deshpande","gauri")
gaurim.displayMName()
gaurim.displaySname()

// polymorphism



