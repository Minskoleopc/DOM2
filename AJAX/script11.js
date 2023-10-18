

function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        //console.log(response)
        return response.json()
    }).
    then(function(response){
        //console.log(response.data)
        return response.data
    })
}

function getSingle(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
       return  response.json()
    })
    .then(function(response){
        //console.log(response.data)
        return response.data
    })
}


function renderHtml(obj){
    document.write(`<h1>${obj.first_name}${obj.last_name}</h1>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<p>${obj.id}</p>`)
    document.write(`<img src = "${obj.avatar}">`)
}


// getUserPageWise(2)
// .then(function(response){
//     let idG = response[0].id
//     return getSingle(idG)
// })
// .then(function(el){
//     console.log(el)
//     renderHtml(el)
// })


async function getUserInfo(){
    let arr = await getUserPageWise(2)
    let id = arr[1]['id']
    let obj = await getSingle(id)
    renderHtml(obj)
}
getUserInfo()




//renderHtml(obj)
//getSingle(2)
//getUserPageWise(2)