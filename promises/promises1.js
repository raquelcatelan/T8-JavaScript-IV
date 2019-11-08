function falarDepoisDe(segundos , frase) {
    return new Promise((resolve , reject) => {
        if (segundos >10) {
            reject('Muito tempo para esperar ')
        }
        setTimeout(() => {
           resolve(frase) 
        }, segundos * 1000);
    })
}

falarDepoisDe(3, "hmm, esperei para falar").then(frase => console.log(`${frase} - vim da promise`)
).catch(e=> console.log(e)
)

function assarPizza(segundos) {
    return new Promise ((resolve, reject) => {
        if (segundos > 15) {
            reject('A pizza queimou')
        }
        setTimeout(() => {
           resolve('Pizza pronta hummm') 
        }, segundos*1000);
    })
}


function irPraCasaDosAmigos() {
    // console.log('Agora vou pra casa dos amigos');
    cheguei = true
    return cheguei
    
}

function comprarEmOutroLugar() {
    console.log('To sem comida comida nao posso ir sem nada');
    
    
}

assarPizza(10).then(resposta => irPraCasaDosAmigos()).then(respostaDosAmigos => console.log(`${respostaDosAmigos ? "Vamos chamar o uber " : "Calma ae estou chegando"}`)
).catch(erro => comprarEmOutroLugar())

