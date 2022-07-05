function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia 
        foto.setAttribute("src", "imagens/manhã.jpg")
        document.body.style.background = 'rgba(96, 224, 231, 0.656)'

    } else if (hora >= 12 && hora < 18) {
        //boa tarde 
        foto.setAttribute("src", "imagens/tarde.jpg")
        document.body.style.background = "rgba(203, 162, 13, 0.533)"
    } else {
        //boa noite
        foto.setAttribute("src", "imagens/noite.jpg")
        document.body.style.background = 'rgba(8, 3, 93, 0.533)'
    }
}