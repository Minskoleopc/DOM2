let buttonOne = document.querySelector('#one')
let inputE = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonOne.addEventListener('click', function () {
    let txt = inputE.value
    let newL = document.createElement('li') // <li></li>
    newL.textContent = txt
    addButton(newL)
    ulList.appendChild(newL)
    inputE.value = ""
})


ulList.addEventListener('click',function(e){

    if(e.target.tagName === "BUTTON"){

        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(e.target.className === "down"){

            let li = e.target.parentElement
            let ulList = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ulList.insertBefore(nextLi,li)
            }
 
        }
        else if(e.target.className === "up"){
            let li = e.target.parentElement
            let ulList = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ulList.insertBefore(li,prevLi)
            }
            
        }



    }



})








function addButton(li) {

    // <li>Mango
    //     <button class="remove">Remove</button>
    //     <button class="up">Up</button>
    //     <button class="down">Down</button>
    // </li>

    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)


    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)




}