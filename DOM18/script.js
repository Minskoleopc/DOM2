

let addButton = document.querySelector('#one')
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')

addButton.addEventListener('click',function(){
    let txt = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt  //  <li>papaya</li>
    addButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""

})


ulList.addEventListener('click',function(e){

    if(e.target.tagName === "BUTTON"){

        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if(e.target.className === "down"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }

        else if(e.target.className === "up"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if(preLi){
                ul.insertBefore(li,preLi)
            }
        }


    }

})



function addButtons(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add("down")
    li.appendChild(d)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

}