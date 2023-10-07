// program 1
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(info.firstName)
console.log(info.lastName)
console.log(info.display)
info.display()

// program 2
// var firstName  = "vijeet"
// var lastName = "dani"
// let info2 = {
//     firstName:"sarika",
//     lastName:"pansare",
//     displayName:function(){
//         // this   =====> info2
//         console.log(info2)
//         console.log(this.firstName + this.lastName)
//         function displayName2(){
//             // this ====> window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

// info2.displayName()
// // global --- window

// var b = 10
// console.log(b)
// console.log(window.b)

// program 3

// var firstNameOne = "ram"
// var lastNameOne  = "dani"
// let info3 = {
//     firstNameOne:"chinmay",
//     lastNameOne:"deshpande",
//     displayName:function(){
//         // this ----> info3
//         console.log(this.firstNameOne + this.lastNameOne)
//         let  displayName2 = ()=>{
//             // this ----> info3
//             console.log(this.firstNameOne + this.lastNameOne)
//         }
//         displayName2()
//     }
// }
// info3.displayName()

// program 4

var firstNameOne = "ram"
var lastNameOne  = "dani"
let info4 = {
    firstNameOne:"chinmay",
    lastNameOne:"deshpande",
    displayName:()=>{
        // this ===> window
        console.log(this.firstNameOne + this.lastNameOne)
        let  displayName2 = ()=>{
            // this ===> window
            console.log(this.firstNameOne + this.lastNameOne)
        }
        displayName2()
    }
}
info4.displayName()












