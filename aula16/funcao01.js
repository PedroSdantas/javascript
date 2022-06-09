function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'ímpar!'
    }
}
num = 11
res = parimpar(num)
console.log(`O número escolhido é ${res}`)