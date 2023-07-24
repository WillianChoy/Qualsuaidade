function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
    alert('[ERRO], Verifique os dados e tente novamente!')
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada ${idade}`   
    var genero = '' 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
  
    if (fsex[0].checked){
      genero = 'Homem'
      if (idade > 0 && idade < 10){
        img.setAttribute('src', './fotos/criancah.png')
      }else if (idade < 21 ){
        img.setAttribute('src', './fotos/jovemh.png')
        // jovem
      }else if (idade < 50){
        //adulto
        img.setAttribute('src', './fotos/adultoh.png')
      }else {
        //idoso
        img.setAttribute('src', './fotos/idosoh.png')
      }
    }else if (fsex[1].checked){
      genero = 'mulher'
      if (idade > 0 && idade < 10){
        img.setAttribute('src', './fotos/criancam.png')
        //criança
      }else if (idade < 21 ){
        img.setAttribute('src', './fotos/jovemm.png')
        // jovem
      }else if (idade < 50){
        //adulto
        img.setAttribute('src', './fotos/adultom.png')
      }else {
        //idoso
        img.setAttribute('src', './fotos/idosom.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um gênero ${genero} com idade ${idade} anos.`
    res.appendChild(img)
   }
}