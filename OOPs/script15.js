

// overloading 

// same class , same method name , different signature

// different class , same methodName , same signature 
// inheritance

class WorldBank {
    loan(){
        console.log("I am loan from worldbank")
    }
    save(){
        console.log("I am save from world bank")
    }

}
class SBI extends WorldBank {
    loan(){
        console.log("I am loan from sbi ")
        super.loan()
    }
    save(){
        console.log("I am save from sbi")
        super.save()
    }

    parentSave(){
        super.save()
        super.loan()
    }
}


class PNB extends WorldBank{
    loan(){
        console.log("I am loan from pnb ")
        super.loan()
       
    }
    save(){
        console.log("I am save from pnb") 
        super.save()
    }
}

let nagpursbi = new SBI()
let nagpurpnb = new PNB()

nagpursbi.parentSave()
nagpursbi.loan()
nagpurpnb.loan()


nagpurpnb.save()
nagpursbi.save()



