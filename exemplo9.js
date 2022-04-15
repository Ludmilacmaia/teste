//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function conversorDolar (real){
    const cotação = 4.70
    const valorEmDolar = (real/cotação).toFixed(2)
    return `R$ ${real} = ${valorEmDolar} dólares`

}
console.log(conversorDolar(100))