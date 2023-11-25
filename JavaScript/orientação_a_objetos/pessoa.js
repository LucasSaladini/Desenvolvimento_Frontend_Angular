class Pessoa {
    nome
    peso
    altura

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2)
    }

    classificarImc() {
        let imc = this.calcularImc() 

        if(imc < 18.5) {
            return 'Abaixo do Peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal'
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do Peso'
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso'
        } else {
            return 'Obsedidade Grave'
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose.classificarImc())

const renan = new Pessoa('Renan', 63, 1.75)
console.log(renan.classificarImc())

const vitor = new Pessoa('Vitor', 100, 1.69)
console.log(vitor.classificarImc())