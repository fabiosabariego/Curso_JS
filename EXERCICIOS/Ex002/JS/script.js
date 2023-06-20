function Verificar(){
    var res = document.getElementById('res');
    var anoNasc = document.getElementById("txtAno");
    var sexo = document.getElementsByName("radsex");
    var resposta = document.getElementById("res");
    var systemDate = new Date();
    var ano = systemDate.getFullYear();
    var genero = '';
    var img = document.getElementById('img');

    idade = ano - Number(anoNasc.value);

    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano){
        window.alert('Verifique os dados e tente novamente!');
    }
    else{
        if(sexo[0].checked){
            genero = 'Homem';
        }
        else if (sexo[1].checked){
            genero = 'Mulher';
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;

        if (genero == 'Mulher'){
            if (idade >= 0 && idade <= 10){
                img.src = "../image/Menina10.png";
            }
            else if(idade <= 20){
                img.src = "../image/Menina20.png";
            }
            else if(idade <= 30){
                img.src = "../image/Menina30.png";
            }
            else if (idade <= 65){
                img.src = "../image/Menina50.png"
            }
            else{
                img.src = "../image/Menina80.png"
            } 
        }

        if (genero == 'Homem'){
            if (idade >= 0 && idade <= 10){
                img.src = "../image/Menino10.png";
            }
            else if(idade <= 20){
                img.src = "../image/Menino20.png";
            }
            else if(idade <= 30){
                img.src = "../image/Menino30.png";
            }
            else if (idade <= 65){
                img.src = "../image/Menino50.png"
            }
            else{
                img.src = "../image/Menino80.png"
            } 
        }

    }

}    
    



