
const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
const placeholderCard = {
    nome: "Carta nao carregada",
    tipo: "Arcano maior",
    descricao: "Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

fetch("tarot.json").then(response =>{
    // console.log(response);
    return response.json()
    
    
}).then(json => {
    console.log(json)
    renderizaCarta(selecionarCartaAleatória(json)) 

})


// fazer funçao para tirar uma nova carta aleatoria 
selecionarCartaAleatória = cartas =>{
let aleatoria = Math.floor(Math.random()* cartas.length)
return cartas[aleatoria]

}

function ativaSpinner(){ 
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Ativa Spinner")
        }, 3000)
    })
}


async function carregaCartas(){
    errorSection.innerHTML = ""
    loading.style.display = "block"
    try {
        const response = await fetch('tarot.json')
        console.log(response);
        
        if(!response.ok) throw  `com o status: ${response.status}`
        const json = await response.json()
        const espera = await ativaSpinner()
        renderizaCarta(selecionarCartaAleatória(json))
        loading.style.display = "none"
        
    } catch (e) {
        renderizaCarta(placeholderCard)
        errorSection.innerHTML = `A requisicao falhou: ${e}`
        loading.style.display = "none"
    }

}


carregaCartas()

novaCarta = () => {
    carregaCartas()
}

// Quando nao carregar teremos como expor informacoes fixas 

