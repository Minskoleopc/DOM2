
let input = document.querySelector('input')
let button = document.querySelector('button')
let ulList = document.querySelector('ul')

console.log(input)
console.log(button)
console.log(ulList)

button.addEventListener('click',function(){
    let text = input.value // 'grapes'
    let newELement = document.createElement('li') // <li></li>
    newELement.textContent = text // <li>grapes</li>
    ulList.appendChild(newELement)
    input.value = ""
})