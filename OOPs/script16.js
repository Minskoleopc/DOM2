// class Calculator {
//     addition(x,y){
//         console.log(x+y)
//     }
//     addition(x,y,z){
//         console.log(x+y+z)
//     }
//     addition(x,y,z,a){
//         console.log(x+y+z+a)
//     }
// }
// let calA = new Caculator()
// calA.addition(2,4)
// calA.addition(2,4,5)
// calA.addition(2,4,5,5)

// program 2

class CalculatorB {
    addition(a,b,c,d){
        if( a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
        else if( a != undefined && b != undefined && c != undefined ){
            console.log(a+b+c)
        }
        else if( a != undefined && b != undefined){
            console.log(a+b)
        }
    }
}

let calB = new CalculatorB()
calB.addition(34,5)
calB.addition(34,5,4)
calB.addition(34,5,4,5)

// same class , same method name , different signature ---- overloading 

class WorldBank {
    save(){
        console.log("I am save from worldBank")
    }

    loan(){
        console.log("I am loan from worldBank")
    }
}
class SBI  extends WorldBank {
    displayBranch(){
        console.log("I am SBI branch")
    }
    // override 
    loan(){
        console.log("I am from SBI loan")
        super.loan()
    }
    save(){
        console.log("I am from SBI save")
        super.save()
    }
}

class PNB  extends WorldBank {
    displayBranch(){
        console.log("I am PNB branch")
    }
    loan(){
        console.log("I am from PNB loan")
    }
    save(){
        console.log("I am from PNB save")
    }
}

let a = new SBI()
a.loan()
a.save()
a.displayBranch()






