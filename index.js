const botao = document.querySelector('.buton')
const buton = document.querySelector('.butons')
const numSorteado = document.querySelector('#texto')
var numero = []

for(i = 0; i <= 50; i++){
    numero.push(i)
}

function sortear(){
    numSorteado.innerHTML = "O número sorteado foi " + numero[Math.floor(Math.random() * numero.length)]

    botao.style.display = "none"
    buton.style.display = "block"
}