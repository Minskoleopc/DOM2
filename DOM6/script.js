// <h1 class="one" id="two" name="nm">Chinmay</h1>
// Css selector
// tagName 
let headOne = document.querySelector('h1')
console.log(headOne)
// class 
let byClass = document.querySelector('.one')
console.log(byClass)
// id 
let byId = document.querySelector('#two')
console.log(byId)
// attribute
// tagName[attribute = "value"]
let byAttribute =  document.querySelector('h1[name = "nm"]')
console.log(byAttribute)

// <p id  = "three" class = "four" name = "five">Para</p>

let para = document.querySelector('p')
let byId1 = document.querySelector('#three')
let byClassD = document.querySelector('.four')
let byAttributeB = document.querySelector('p[id="three"]')


console.log(para)
console.log(byId1)
console.log(byClassD)
console.log(byAttributeB)


// program 1
let headTwo = document.querySelector('#two')
// //console.log(headTwo)
// headTwo.addEventListener('mouseover',function(){
//     headTwo.textContent = "Mayur"
// })

// console.log(headTwo.textContent)
// headTwo.textContent = "Ram"

headTwo.addEventListener('click',function(){
    headTwo.textContent = "Ram"
    headTwo.style.color = "red";
})

// let info  = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(info.firstName)
// info.firstName = "shirish"
// console.log(info)

let info = {
        fullName:"komal parsi",
        parent:{
            father:"chinmay deshpande",
            mother:"kanchan deshpande"
        }

}

//info.parent.mother = "kanchan s deshpande"









