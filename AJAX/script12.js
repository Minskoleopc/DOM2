function getUserPage(pageNo){
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
    .then(function(response){
        //console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response)
       return  response.data
    })
}
function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}
function renderHtml(obj){
    document.write(`<h1>${obj.first_name}${obj.last_name}</h1>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<p>${obj.id}</p>`)
    document.write(`<img src = "${obj.avatar}">`)
}

// getUserPage(2)
// .then(function(response){
//     console.log(response)
//     let id1 = response[0].id
//     return getSingleUser(id1)

// })
// .then(function(response){
//     console.log(response)
//     renderHtml(response)
// })

async function getSingleUserInfo(pageNumber){
    let users = await getUserPage(pageNumber)
    let id1 = users[0].id
    let user = await getSingleUser(id1)
    renderHtml(user)
}
getSingleUserInfo(1)