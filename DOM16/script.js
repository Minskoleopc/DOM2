
let inputE = document.querySelector('input')
let buttonOne = document.querySelector('#one')
let ulList = document.querySelector('ul')

console.log(inputE)
console.log(buttonOne)
console.log(ulList)

buttonOne.addEventListener('click',function(){
    let txt = inputE.value
    let newLi  = document.createElement('li') // <li></li>
    newLi.textContent = txt // <li>papaya</li>
    addButtons(newLi)
    ulList.appendChild(newLi)
    inputE.value = ""

})

{/* <li>Banana
<button class = "remove">Remove</button>
<button class = "down">Down</button>
<button class = "up">Up</button>
</li> */}

function addButtons(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') //<button class = "remove">Remove</button>
    li.appendChild(r)

    let d = document.createElement('button') // <button></button>
    d.textContent  = "Down" // <button>Down</button>
    d.classList.add('down') // <button class = "down">Down</button>
    li.appendChild(d)


    let u = document.createElement('button') // <button></button>
    u.textContent  = "Up" // <button>Up</button>
    u.classList.add('up') // <button class = "up">Up</button>
    li.appendChild(u)





}

// let info = {
//     fullName:"chinmay",
//     parent:{
//         mother:"kanchan deshpande",
//         displayName:function(){
//             console.log(this.mother)
//         }
//     }
// }
// info.parent.displayName()