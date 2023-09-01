let headone = document.querySelector('h1')
let button = document.querySelector('button')

console.log(headone)
console.log(button)

button.addEventListener('click',function(){
    headone.style.color = "blue"
})