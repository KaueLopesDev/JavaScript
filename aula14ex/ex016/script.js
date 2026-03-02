function contar() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)

     if (txtn1.value.length == 0 || txtn2.value.length == 0 ){
        alert('[ERROR] faltam dados')
        res.innerHTML = `Impossivel contar`
     } else {
        if (n3 <= 0) {
            alert('[ERROR] Passo invalido CONSIDERANDO PASSO 1')     
            n3 = 1
        }
        res.innerHTML = 'Contando: <br>'
         if (n1 < n2) {
            for(var c = n1; c <= n2; c+=n3) {
                res.innerHTML += `${c}\u{1F449}`
            }
        } else {
            for(var c = n1; c >= n2; c-=n3){
                res.innerHTML += `${c}\u{1F449}`
            }
        }
       
        res.innerHTML += `\u{1F3C1}`
     }

     
  
}