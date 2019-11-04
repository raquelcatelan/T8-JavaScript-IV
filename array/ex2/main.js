const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

const validacao = (nome) =>{
    if (nome.trim() === '') throw 'O campo está vazio'
        
    
}

const checaPresenca = nome => {
    let estaNaLista = nomesNoRole.find((presente) => {
        return nome.toLowerCase() === presente.toLowerCase
    })

    if (estaNaLista) {
    //    console.log("To na lista");
        document.getElementById('nome')
        return
    }
    throw `${nome} nãoooo estava no role`
}




document.getElementById('form-do-role').addEventListener('submit' , function(event){
    event.preventDefault()
    let valorCampo = document.getElementById('nome').value
    


    try {
        
        validacao(valorCampo)
        checaPresenca(valorCampo)
        

    } catch (erro) {
        // console.log(erro);
        document.getElementById('status').innerHTML = erro        
        document.getElementById('nome').classList.add('is-invalid')
    }

})
