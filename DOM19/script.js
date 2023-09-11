{/* <h1 id = "one" class = "two" name = "nm">Chinmay</h1>
<p>I am learning </p>
<ul>
    <li class = "fe">Html</li>
    <li class = "fe">Css</li>
    <li class = "fe">Javascript</li>
</ul>
<ol>
    <li class = "be">Python</li>
    <li class = "be">Java</li>
    <li class = "be">C#</li>
</ol>   */}

// css selector
// document.querySelector('h1')
// document.querySelector('.two')
// document.querySelector('#one')
// document.querySelector("h1[name='nm']")

let firstE = document.querySelector('.fe')
let lastE = document.querySelector('.be')
let headOne = document.querySelector('h1')


console.log(firstE)
console.log(lastE)

let allElementsFE = document.querySelectorAll('.fe')
console.log(allElementsFE)

let allElementsBE = document.querySelectorAll('.be')
console.log(allElementsBE)

headOne.addEventListener('click',function(){
    for(let i = 0 ; i < allElementsFE.length ; i++){
        // console.log(i)
         allElementsFE[i].style.color = "red"
         allElementsBE[i].style.color ="green"
     }     
})

// <h1 id = "one" class = "two" name = "nm">Chinmay</h1>

let allLiELements = document.querySelectorAll('li')
console.log(allLiELements)  //nodeList

let allLiELements2 = document.getElementsByTagName('li')
console.log(allLiELements2) // html collection

let byId  = document.querySelector('#one')
let byId2 = document.getElementById('one')
console.log(byId2)

let feEl  = document.querySelectorAll('.fe')
console.log(feEl)

let fet2 = document.getElementsByClassName('fe')
console.log(fet2)

let nodeList = document.querySelectorAll("li[name = 'backE']")
let nodeList2 = document.getElementsByName("backE")
console.log(nodeList)
console.log(nodeList2)














