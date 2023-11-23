const valorProduto = 100
const tipoPagamento = 4 //1 - À Vista Débito, 2 - À Vista no Dinheiro ou PIX, 3 - Em duas vezes, 4 - Mais de duas vezes

if (tipoPagamento === 1) {
    let precoFinal = valorProduto - (valorProduto * 0.10)
    console.log(precoFinal)
} else if (tipoPagamento === 2) {
    let precoFinal = valorProduto - (valorProduto * 0.15)
    console.log(precoFinal)
} else if (tipoPagamento === 3) {
    let precoFinal = valorProduto
    console.log(precoFinal)
} else {
    let precoFinal = valorProduto + (valorProduto * 0.10)
    console.log(precoFinal)
}