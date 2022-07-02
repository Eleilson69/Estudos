var idade = 17
console.log(`Você Tem ${idade} anos`)
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18) {
    console.log('Voto Opcional')
} else if (idade > 66) {
    console.log('Voto Ocsional')
} else {
    console.log('Voto Obrigatorio')
}