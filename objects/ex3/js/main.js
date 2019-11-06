let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];




const renderNavbar = new Navbar 
renderNavbar.render()

// const card1 = new Cards(resultados[0].titulo , resultados[0].ingredientes , resultados[0].imagem)
// card1.criaCards()
// const card2 = new Cards( resultados[1].titulo , resultados[1].ingredientes , resultados[1].imagem )
// card2.criaCards()
// const card3 = new Cards( resultados[2].titulo , resultados[2].ingredientes, resultados[2].imagem )
// card3.criaCards()
// const card4 = new Cards( resultados[3].titulo , resultados[3].ingredientes , resultados[3].imagem )
// card4.criaCards()
// const card5 = new Cards( resultados[4].titulo , resultados[4].ingredientes , resultados[3].imagem )
// card5.criaCards()

document.querySelector('.cards').innerHTML = resultados.map((receita) =>{
    return new Cards(receita).render()
}).join('')

document.querySelector('.button__search').addEventListener('click' , function(){
    let inputValue  = document.querySelector('.input__search').value.toUpperCase()
    let achados  = resultados.filter(receita => {
        return receita.titulo.toUpperCase().includes(inputValue) || receita.ingredientes.toUpperCase().includes(inputValue)
    })
   console.log(achados);
   
document.querySelector('.cards').innerHTML = achados.map((receita) =>{
    return new Cards(receita).render()
}).join('')
document.querySelector('.input__search').value ='' 
})


