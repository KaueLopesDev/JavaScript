function parimpar(n) {
    if (n%2 == 0) {
        return 'PAR!'
    } else {
        return 'ÍMPAR!'
    }
}

let res = parimpar(2)
console.log(`Seu número é ${res}`)