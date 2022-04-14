//criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, 
//para números divisíveis por 3 irá impirmir 'Fizz' 
//para números divisíveis por 5 irá imprimir 'Buzz' 
//se não cumprir nenhum dos casos acima imprime o próprio número.

let numero = 9
//esses números são divisíveis por 3 ou 5?
if (numero % 3 ==0 && numero%5 ==0){
    console.log('FizzBuzz')
}   else if(numero %3 ==0){
    console.log('Fizz')
}   else if(numero %5==0){
    console.log('Buzz')
}   else{
    console.log(numero)
}