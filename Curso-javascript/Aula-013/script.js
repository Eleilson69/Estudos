function Verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector("#txtano")
    let res = document.querySelector('.Res')

    if (fano.value.length == 0 || fano.value >= ano) {
        alert('Algo deu errado')
    } else {
        let fsex = document.getElementsByName('redsex')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "Homen"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebê-menino.jpg')
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}