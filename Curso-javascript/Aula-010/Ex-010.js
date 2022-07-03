/*let num = [1, 3, 2, 4, 5, 6, 7, 8]
num.sort()
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem ovalor ${num[pos]}`)
}*/
let num = [1, 3, 2, 4, 5, 6, 7, 8]
for (let pos in num) {
    console.log(`A posição ${pos} tem ovalor ${num[pos]}`)
}