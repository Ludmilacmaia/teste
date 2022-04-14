//criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
//imc=peso/altura²


function calculaIMC (peso,altura){
    const alturaAoQuadrado = Math.pow(altura,2)
    const imc = peso/alturaAoQuadrado.toFixed(1)
    return `seu imc é: ${imc}`
}
console.log(calculaIMC(66,1.57))
