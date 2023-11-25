function incrementarJuros(valor, percentual) {
    const valorAcrescimo = (percentual / 100) * valor
    
    return valor + valorAcrescimo
}

console.log(incrementarJuros(100, 10))