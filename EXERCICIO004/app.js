function fnValidarIdadeCNH() {
    event.preventDefault()
    
    let nomeUsuario = document.getElementById('txtNome').value
    let idadeUsuario = document.getElementById('txtIdade').value



    if (idadeUsuario>=18) {
        texto="Parabéns "+nomeUsuario+", você pode tirar CNH."
        document.getElementById('resultado').innerHTML = texto
    } else{
        texto="Desculpe "+nomeUsuario+", você NÃO pode tirar CNH ainda."
        document.getElementById('resultado').innerHTML = texto
    }
}