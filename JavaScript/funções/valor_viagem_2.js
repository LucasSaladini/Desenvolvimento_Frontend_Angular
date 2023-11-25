const precoEtanol = 5.79
const precoGasolina = 6.66
const tipoCombustivel = 'Gasolina'
const kmPorLitro = 10
const distancia = 100

let consumo = (distancia / kmPorLitro)

if (tipoCombustivel === 'Gasolina') {
    let gasto = consumo * precoGasolina
    console.log(gasto.toFixed(2))
} else {
    let gasto = consumo * precoEtanol
    console.log(gasto.toFixed(2))
}