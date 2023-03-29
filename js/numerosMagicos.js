let numeroMagico = 0;
let formulario = document.getElementById('formu');
formulario.addEventListener('submit',adivinar);

function numeroRandom(){
    numeroMagico = Math.floor(Math.random()* 100) + 1;
    console.log(numeroMagico);
    alert("El numero fue generado, comienza a adivinar");
    return numeroMagico;
}

function adivinar(e){
    e.preventDefault();
    console.log("desde adivinar");

    let input = document.querySelector('input');
    console.log(input);
    let dato = parseInt(input.value);
    
    if(dato === numeroMagico ){
        alert("Adivinaste el numero, Ganaste!!!")
    }
    else if(dato > numeroMagico)
    {
        alert("El numero que ingresaste es mayor que el numero magico")
    }
    else if(dato < numeroMagico)
    {
        alert("El numero que ingresaste es menor que el numero magico")
    }
}