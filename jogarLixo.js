function jogarLixo (dia) {
    if(dia==='segunda'||dia==='quarta' || dia==='sexta') {
        console.log('dia de lixo orgânico')

    }   else if(dia==='terça'||dia==='quinta'){
        console.log('dia de lixo reciclável')

    }   else {
        console.log('não há coleta hoje')

    }
    return dia
}
let qualLixoJogarHoje = jogarLixo('terça')
console.log(qualLixoJogarHoje)