function verificarIdade(idade) {
    if (idade < 18) {
        return 'Menor de idade'
    } else {
        return 'Maior de idade'
    }
}

console.log(verificarIdade(15))