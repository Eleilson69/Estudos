var hora =
    console.log(`Agora são ${hora} Horas`)
if (hora >= 6 && hora <= 12) {
    console.log('bom dia')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite')
} else if (hora < 6 && hora > 0) {
    console.log('Boa Madrugada')
}