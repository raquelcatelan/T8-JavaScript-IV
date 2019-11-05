function Crianca (nome, idade ,  altura){
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura < 1)
    }
}

const c1 = new Crianca('Bete' ,  5 , 1.1)
console.log(`${c1.nome} tem ${c1.altura} e ${c1.podeBrincar() ? 'pode brincar': 'nao pode brincar'}`)
const c2 = new Crianca('Carlos', 4 , 0.8)
console.log(`${c2.nome} tem ${c2.altura} e ${c2.podeBrincar() ? 'pode brincar': 'nao pode brincar'}`)


//nome, sobrenome , materia 

function Professor(nome, sobrenome, materia ){
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia
}

Professor.prototype.dizMateria = function(){
    return `A materia é: ${this.materia}`
}

const js3  =  new Professor("Cintia" , "Fumi" , 'JavaScript 3')
console.log(js3.dizMateria())
const js4 = new Professor('Lydia' , 'Rordigues' , 'JavaScript 4 ')
console.log(js4.dizMateria())

js4.dizMateria= function(){
    return `A professora é: ${this.nome} e a matéria é ${this.materia}`
}

log 