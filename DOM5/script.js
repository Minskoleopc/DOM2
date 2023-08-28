// selecting the elemnent

//  <h4 id = "one" class = "two" name = "nm" >Chinmay4</h4>

// id 

let idOne = document.querySelector('#one')
console.log(idOne)
// class 
let byClass = document.querySelector('.two')
console.log(byClass)
// tagName 
let byTagName = document.querySelector('h4')
console.log(byTagName)
// any attribute
// tagName[attribute="value"]
let byAttribute = document.querySelector('h4[name = "nm"]')
console.log(byAttribute)
