{/* <h1 id = "one">Chinmay</h1>
<button>ChangeColor</button> */}

let headOne = document.querySelector('#one')
let buttonColor = document.querySelector('button')
console.log(headOne)
console.log(buttonColor)

buttonColor.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.style.backgroundColor = "yellow"
    headOne.textContent = "chinmay deshpande"

})