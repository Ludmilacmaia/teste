//Crie uma função que determina se um número é par ou impar.

function parOuImpar (num){
    if(num %2 ==0){
        return `${num} é par`
    }else{
        return `${num} é ímpar`
    }
} 
console.log(parOuImpar(33))