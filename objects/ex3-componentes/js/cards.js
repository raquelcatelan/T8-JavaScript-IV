class Cards {
    constructor(titulo, ingredientes , imagem){
        this.titulo = titulo 
        this.ingredientes = ingredientes
        this.imagem = imagem 
    }
    
    criaCards(){
    const div = `<div class="card">
    <img class="imagem" src="${this.imagem}"/>
    <h2>${this.titulo}</h2>
    <p class="ingredientes" >${this.ingredientes}</p>
    </div>`

    document.querySelector('.cards').insertAdjacentHTML("beforeend" , div)
    }
}