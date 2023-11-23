const precoCombustivel = 5.79
const kilometrosPorLitro = 12
const distancia = 1580

let valorTotal = (distancia / kilometrosPorLitro) * precoCombustivel

console.log(valorTotal.toFixed(2))