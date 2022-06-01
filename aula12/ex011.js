var idade = 19
console.log(`Com ${idade} anos`)

if (idade < 16){
    console.log('Não vota.')
} else if (idade < 18 || idade > 60){
    console.log('o Voto opcional.')} else {
        console.log('Voto obrigatório.')
    }
