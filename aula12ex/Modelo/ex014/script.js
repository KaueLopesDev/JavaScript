function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        imagem.src = 'fotomanha.jpg'
        document.body.style.background = '#e29e00'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        imagem.src = 'fototarde.jpg'
        document.body.style.background = '#4e2753'
    } else {
        //Boa noite
        imagem.src = 'fotonoite.jpg'
        document.body.style.background = '#273f43'
    }
}
