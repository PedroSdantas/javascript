num = [4, 5, 6, 7, 8]

for(pos in num){
    console.log(`Na posição ${pos} temos ${num[pos]}`)
}

pos = num.indexOf(4)
if (pos == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
