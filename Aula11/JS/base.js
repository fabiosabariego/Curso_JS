function Verificar(){
    
    var vel = Number(document.querySelector('input#vel').value);
    var multa = document.querySelector('p#multa');

    if(vel > 60){
        multa.innerHTML = `Velocidade ${vel}Km/h, voce foi multado!!`;
    }
    else{
        multa.innerHTML = `Velocidade ${vel}Km/h, dentro do normal!`;
}
}

