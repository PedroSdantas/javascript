
let numeros = []
let soma = 0
let cont = 0
function adicionar(){
    let n = document.getElementById('num')
    let nu = Number(n.value)
    let sel = document.getElementById('adc')
    if (n.value.length == 0 || n.value < 1 || n.value > 100) {
        window.alert('Erro! Você não adicionou nenhum valor ou adicionou um valor fora do range permitido.')
    } else{
        if (nu in numeros){
            window.alert(`O número digitado já foi  adicionado anteriormente na lista. Digite outro número.`)
            let item = document.createElement("option");
            item.text = `Valor ${nu} não adicionado.`;
            sel.appendChild(item);
        } else {
            numeros.push(nu)
        
            let item = document.createElement('option')
            item.text = `Valor ${nu} adicionado.`
            sel.appendChild(item)
            soma += nu 
            cont ++
        }
    }
}


function finalizar(){
    numeros.sort()
    let res = document.getElementById('fim')
    res.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados. <br> O maior valor informado foi ${numeros[cont]}. <br>O menor valor informado foi ${numeros[0]}. <br> A média dos valores digitados é ${soma/ numeros.length}.`
}



