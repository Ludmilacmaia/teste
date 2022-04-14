function mesFestivo(mes) {
    if(mes==='fevereiro') {
        console.log('carnaval')
    }else if(mes==='abril'){
        console.log('Páscoa')
    }else if(mes==='maio'){
        console.log('dia das mães')
    }else{
        console.log('não há feriado neste mês')
    }
    return mes
}
let qualFeriado = mesFestivo('agosto')
console.log(qualFeriado)
