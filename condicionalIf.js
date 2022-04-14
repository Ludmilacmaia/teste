function resultadoBoletim(nota1, nota2, nota3, nota4) {
    const media = (nota1 +nota2 +nota3 + nota4)/4

    if(media >=7 && media <=10) {
        return 'aprovada'
    } else if (media >+4 && media <7) {
        return 'recuperação'
    } else if (media <4 && media >=0) {
        return 'reprovada'
    }
}

console.log(resultadoBoletim(0,0.5,4,3))
