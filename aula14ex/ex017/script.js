function gerar(){
    var mult = document.getElementById('mult')
    var txtn = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    var n = Number(txtn.value)

    tab.innerHTML = ' '

    if (txtn.value.length == 0) {
        alert('[ERROR] Preencha o campo corretamente!')
    } else {
        for (var c = 1; c <= 10; c++){
            var res = n * c
            var opção = document.createElement('option')
            opção.setAttribute('value', `n${c}`) 
            opção.innerHTML = `${n} x ${c} = ${res}`
            tab.appendChild(opção)
        }
    }
}




