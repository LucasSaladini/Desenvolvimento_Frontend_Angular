class Pessoa {
    nome
    idade
    anoDeNascimento

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2023 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}

const lucas = new Pessoa('Lucas', 30)

console.log(lucas)

lucas.descrever()