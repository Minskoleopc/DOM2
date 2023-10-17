
let q1 = document.querySelector('button')
console.log(q1)

function getUserPage(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        // console.log(response)
        // console.log(response.data)

        response.data.forEach(el => {
            document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
            document.write(`<p>${el.email}</p>`)
            document.write(`<p>${el.id}</p>`)
            document.write(`<img src = "${el.avatar}">`)
        });
    })

}
//getUserPage(2)
q1.addEventListener('click',function(){
    getUserPage(2)
})

// API ----- listofUsers -----> id ------ singleUserinfo call

// .then()
// asyn await