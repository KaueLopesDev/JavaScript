function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')
     if (fano.value.length == 0 || Number(fano.value) > ano) {
          window.alert('[ERROR]Verifique os dados e tente novamente!')
     } else {
          var fsex = document.getElementsByName('radsex')
          var idade = ano - Number(fano.value)
          var gênero = ' '
          var img = document.createElement ('img')
          img.setAttribute('id', 'imagem')
          if (fsex[0].checked) {
               gênero = 'Homem'
               if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'menino.jpg')
               } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovemM.jpg')
               } else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'adultoM.webp')
               } else {
                    //idoso
                    img.setAttribute('src', 'idoso.webp')
                    img.style.objectPosition = 'top';
               }
          } else if (fsex[1].checked) {
               gênero = 'Mulher'
               if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'menina.webp')
               } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovemF.jpg')
               } else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'adultoF.webp')
               } else {
                    //idoso
                    img.setAttribute('src', 'idosa.webp')
               }
          }
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
          res.appendChild(img)
     }
}