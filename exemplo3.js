//criar um programa que irá nos informar os dias de aula para a nossa turma.

function diasDeAula (diaDaSemana){
switch (diaDaSemana){
    case 'sábado':
        return 'é dia de aula'
        
        
    case 'quarta':
        return 'é dia de revisão'


    default:
        return 'hoje a aula não é obrigatória'
        
}}

console.log(diasDeAula('paçoca'))