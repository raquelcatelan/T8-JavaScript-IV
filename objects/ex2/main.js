const users = [{
  nome: "Lydia Rodrigues",
  imagem: "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D"
},
{
  nome: "Doge",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
}]

class Avatar {
  constructor ( nome , imagem){
  this.nome = nome 
  this.imagem = imagem

  }

  renderComCreat(){
    const avatarDiv = document.createElement('div')
    avatarDiv.setAttribute('class' , 'avatar')
    const avatarImg = document.createElement('img')
    avatarImg.src= this.imagem
    avatarImg.setAttribute('class' , "img-rounded")
    const avatarTitle = document.createElement('h2')
    avatarTitle.innerHTML = this.nome
    avatarDiv.appendChild(avatarImg)
    avatarDiv.appendChild(avatarTitle)
    document.getElementById('cards-section').appendChild(avatarDiv)

  }

  criaAvatar(){
    const div =` <div class="avatar green" >
    <img class="img-rounded" src=${this.imagem}></img>
    <p>${this.nome}</p>
</div>`


document.getElementById('cards-section').insertAdjacentHTML("beforeend" , div)
  }
}
const avatar1 = new Avatar (users[0].nome , users[0].imagem)
avatar1.criaAvatar()
console.log(avatar1)
const avatar2 = new Avatar (users[1].nome , users[1].imagem) 
avatar2.criaAvatar()
console.log(avatar2);



