const comidas  = ['Lasanha' , 'Batata', 'Bacon']

console.log(comidas[2]);

comidas.forEach((comida, posicao) => {

    console.log(`na posicao ${posicao} temos a comida ${comida}`);
    
})

//concat faz copia do array e adiciona o elemento que a gente passa como elemento

let outrasComidas = comidas.concat('Jiló')
console.log('comidas' , comidas);
console.log('outras comidas' , outrasComidas);


// join cria uma string do array e ele ultiliza o argumento como separador 

let stringDoArray  = comidas.join(',')
console.log(stringDoArray);


//shift arranca o primeiro elemento e retorna o valor 

console.log(comidas.shift());
console.log(comidas);


//pop arranca o ultimo item do array e retorna o que ele deletou, modifica permanentemente o array 
console.log(comidas.pop());
console.log(comidas);

//
comidas.unshift('Macarrão')
console.log(comidas);


//Push Adiciona um item na ultima posicao do array 
comidas.push('Strogonoff')
console.log(comidas);



// Inverte o array
comidas.reverse()
console.log(comidas);


let cortarAlimentos = comidas.slice(1,2)
console.log(cortarAlimentos);
console.log(comidas);


//Pode remover e adicionar valores ultilizando posicao, indice de apagar e 
comidas.splice(1 , 0, "Alface")
console.log(comidas);


//coloca em ordem 
comidas.sort()
console.log(comidas);


comidas.unshift("Batata")
console.log(comidas);
console.log(comidas.indexOf("Batata"));
console.log(comidas.lastIndexOf("Batata"));
//nao encontrou
console.log(comidas.indexOf("Brocolis"));


let mapArray = comidas.map((comida) => `${comida} Gosotsa `)
console.log(mapArray);
let teste  = comidas.forEach((comida) => `${comida} Boa `)
console.log(teste);
const numeros = [1, 2, 3, 4, 5]
console.log(numeros);

let numerosDobrados = numeros.map((numero) => numero*2)
console.log(numerosDobrados);

let arrayProcura =  comidas.filter((comida) => comida === 'Batata')
console.log(arrayProcura);

let juntaComida = comidas.reduce((esq , dir) => {
    return `${esq} e ${dir}`
 })

console.log(juntaComida);

let somaNumero = numeros.reduce((esq, dir) => {
    return esq + dir 
})
console.log(somaNumero);


console.log(numeros);
console.log(numeros.find(numero => numero ===1))
console.log(numeros.findIndex(numero => numero ===1));

console.log(numeros.find(numero => numero ===-1));
console.log(numeros.findIndex(numero => numero ===9));


menorQueDez = (algumValor) => algumValor < 10 
console.log(numeros.every(numero => menorQueDez (numero)));
 

