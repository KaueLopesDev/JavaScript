function contar() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)

    if (n1 == 0 && n2 == 0) {
        alert('[ERROR] Impossivel contar!!!')
    } else if (n3 <= 0){
        alert('[ERROR] Passo Receberá 1')
        n3 = 1
        res.innerHTML = `Contando: `

        if (n1 <= n2) {
            for (var c = n1; c <= n2 ; c+=n3){
                res.innerHTML += `${c}... ` 
            }
        } else if (n1 > n2){
            for (var c = n1 ; c >= n2; c-=n3) {
              res.innerHTML += `${c}...`
            }
        } else {
            res.innerHTML = 'Contagem INVALIDA'
        }
    }

}