function adicionar(){
    let n = document.getElementById('num')
    let nu = Number(n.value)
    let sel = document.getElementById('adc')
    if (n.value.length == 0) {
        window.alert('Erro! Algum valor deve ser adicionado!')
    } else{
        let numeros = []
        numeros.push(nu)
        window.alert(`Valor ${numeros} adicionado.`)
        let item = document.createElement('option')
        item.text = `Valor ${numeros} adicionado.`
        sel.appendChild(item)
    }
}



