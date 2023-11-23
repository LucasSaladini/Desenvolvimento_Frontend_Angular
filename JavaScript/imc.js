const peso = 150
const altura = 1.83

let imc = peso / Math.pow(altura, 2)
console.log(imc)

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso')
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso')
} else if (imc >= 40) {
    console.log('Obesidade mórbida')
}