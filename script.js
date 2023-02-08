function carregar(){
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()
  let minuto = data.getMinutes()
  msg.innerHTML = `agora são ${hora}:${minuto} horas`
  if(hora >= 0 && hora <= 12){
    img.src = 'fotomanha.png'
    document.body.style.backgroundColor = '#DBD0B3'
  }
  else if(hora >= 13 && hora <= 18){
    img.src = 'fototarde.png'
    document.body.style.backgroundColor = '#E3957F'
  }else{
    img.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#252627'
  }
  
}