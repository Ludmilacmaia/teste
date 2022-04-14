//Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.
//F=C*9/5+32

function conversorFarenheit (celsius){
 const fahrenheit = celsius*9/5+32
    return `${celsius}°C = ${fahrenheit}F`
}
console.log (conversorFarenheit(25))