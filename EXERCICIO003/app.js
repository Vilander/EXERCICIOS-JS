function fnCalcularMedia(){
    let vendedor="", vendaJaneiro=0, vendaFevereiro=0, vendaMarco=0, media=0
    vendedor = document.getElementById("vendedor").value
    alert("Seja bem vindo(a) "+ vendedor)

    vendaJaneiro = document.getElementById("vendaJaneiro").value
    vendaFevereiro = document.getElementById("vendaFevereiro").value   
    vendaMarco=document.getElementById("vendaMarco").value
    media = (parseFloat(vendaJaneiro)+parseFloat(vendaFevereiro)+parseFloat(vendaMarco))/3

    document.getElementById("media").innerText=media.toFixed(2)
}