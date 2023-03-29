let numeroMagico = 0;
let formulario = document.getElementById('formu');
formulario.addEventListener('submit',adivinar)

function numeroRandom(){
    numeroMagico = Math.ceil(Math.random()* (100 - 1));
    console.log(numeroMagico);
    return numeroMagico;
}

function adivinar(){
    e.preventDefault();
    console.log("desde adivinar")
}