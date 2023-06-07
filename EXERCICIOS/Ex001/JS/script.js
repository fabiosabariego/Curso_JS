function Carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var msgDia = document.getElementById('msgDia');
    var dataSistema = new Date();
    var hora = dataSistema.getHours();
    var min = dataSistema.getMinutes();
    var sec = dataSistema.getSeconds();

    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`;

    if (hora >= 6 && hora < 12){
        img.src = '../image/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msgDia.innerHTML = 'Bom dia!!';
    }
    else if (hora >= 12 && hora < 18){
        img.src = '../image/tarde.jpg'
        document.body.style.background = '#b9846f'
        msgDia.innerHTML = 'Boa Tarde!!';
    }
    else{
        img.src = '../image/noite.jpg'
        document.body.style.background = '#515154'
        msgDia.innerHTML = 'Boa noite!!';
    }
}