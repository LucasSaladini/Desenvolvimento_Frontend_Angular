function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto/100)))
}

function aplicarJuros(preco, juros) {
    return (preco + (preco * (juros/100)))
}

const precoEtiqueta = 100
const formaDePagamento = 4

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (formaDePagamento  === 3) {
    console.log(aplicarDesconto(precoEtiqueta, 0))
} else {
    console.log(aplicarJuros(precoEtiqueta, 10))
}