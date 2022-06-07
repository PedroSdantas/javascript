function contar() {
    let res = document.getElementById('res')
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar! Preencha corretamente.'
    } else {
        res.innerHTML = `Contando: <br> `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescete
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449} `
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        
        res.innerHTML += `\u{1f3c1}`
     }
    
}
