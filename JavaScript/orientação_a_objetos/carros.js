class Carros {
    marca
    cor
    gastoPorKm

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoPorKm = gastoPorKm
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoPorKm) * precoCombustivel
    }
}



const uno = new Carros('FIAT', 'Prata', (1/12))

console.log(uno.calcularGastoDePercurso(70, 5))

const palio = new Carros('FIAT', 'Preto', (1/10))

console.log(palio.calcularGastoDePercurso(70, 5))