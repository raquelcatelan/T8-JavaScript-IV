const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener('click' , function(event){
    event.preventDefault()
    let body  = JSON.stringify({
        title: titulo.value,
        body: descricao.value,

        userId:1

    })
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST" , 
        headers:{
            "Content-type": "application/json"
        },
        body 

    }).then (response => response.json()).then(json => console.log(json))
const titulo = document.getElementById("titulo")
const descricao = document.getElementById("descricao")
const btnSubmit = document.getElementById("btn-submit")

// btnSubmit.addEventListener('click', function(event){
//     event.preventDefault()
//     let body = JSON.stringify({
//         nome: "Jefferson",
//         email: "jefferson@gmail.com",
//         body: "ATUALIZEI MEU COMENT",
//         postId: 1
//     })
//     fetch("https://jsonplaceholder.typicode.com/comments", {
//         method: 'GET',
//         headers:{
//             "Authentication": "Bearer token"
//         }
//     }).then( response => response.json()).then(json => console.log(json))
// })