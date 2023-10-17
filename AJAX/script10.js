



function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response.data
    })
}

function getSingleUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(responsne){
        return responsne.data
    })
}

function renderHtml(el){
    document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<p>${el.id}</p>`)
    document.write(`<img src = "${el.avatar}">`)
}

// getUserPageWise(2)
// .then(function(data){
//     console.log(data)
//     return data[2]['id']
// })
// .then(function(id){
//     return getSingleUserInfo(id)
// })
// .then(function(obj){
//     renderHtml(obj)
// })



//getUserPageWise(2)



async function getUser(pageNumber){
    let users = await getUserPageWise(pageNumber)
    let id = users[0]['id']
    let singleobj = await getSingleUserInfo(id)
    renderHtml(singleobj)
}
getUser(2)