//criar uma calculadora com as 4 operações matemáticas básicas
//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadora(operação, num1,num2) {
    let resultado
    if (operação === 'soma'){
    resultado = num1+num2
    return resultado
    
    }else if (operação === 'multiplicacao'){
        resultado =  num1*num2
        return resultado
       
    }else if (operação === 'divisao') {
        resultado = num1/num2
        return resultado
        
    }else if (operação === 'subtracao'){
        resultado = num1-num2
        
    }else{
        return `${operação} não é uma operação válida`
    }

}console.log(calculadora('soma', 5, 10))
