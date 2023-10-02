
// program 2
class Addition {

    // addition(x,y){
    //     console.log(x+y)
    // }

    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }

    addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined ){
            console.log(x+y+z)
        }
        else if (x != undefined && y != undefined){
            console.log(x+y)
        }

    }




}

let a = new Addition()
a.addition(13, 45)
a.addition(13, 45, 34)
a.addition(13, 45, 34, 45)