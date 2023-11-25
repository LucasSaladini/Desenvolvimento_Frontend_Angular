const pessoa =  {
    nome: 'Lucas Saladini',
    idade: 30,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}

const atributo = 'nome'

console.log(pessoa[atributo])