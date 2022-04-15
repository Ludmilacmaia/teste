//Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function valorDesconto (preço){
    const desconto = preço*0.05
    return `o valor do desconto é: R$${desconto}`
}
console.log(valorDesconto(100))