class Pessoa {
    nome
    idade

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}

const lucas = new Pessoa()
lucas.nome = 'Lucas Saladini'
lucas.idade = 30

lucas.descrever()