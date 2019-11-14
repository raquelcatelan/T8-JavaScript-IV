


let frutas = ["banana", "morango", "bacurí", "laranja"];


const botao = document.querySelector('#botao')
const input = document.querySelector('#busca')
// console.log(botao)
let valorInput = input.value 


botao.addEventListener('click' , function(e) {
    e.preventDefault()
    // console.log('clicou');
    // console.log(frutas);
console.log();

   if (frutas.find(fruta => fruta ===input.value)) {
   
    alert(`Achou ${input.value} `)
    console.log(` ${input.value} `);
    
       
   } else {

       alert(` Não Achou ${input.value} `)
   }

input.value = ''    

})





