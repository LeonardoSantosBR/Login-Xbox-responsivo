const enviar=document.getElementById('submit')
   enviar.addEventListener('click',execution)

function execution(){
   let nome=document.getElementById('nome')
   let senha=document.getElementById('senha')
   if(nome.value.length==0 || senha.value.length==0) {
      alert('Erro,Por favor verificar email/nome ou senha novamente')
   }
}

