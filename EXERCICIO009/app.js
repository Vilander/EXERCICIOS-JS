function fnRepetirFrase(){
    let qtd=0, frase="", contador=0;

    qtd=document.getElementById('qtd').value
    frase=document.getElementById('frase').value
    document.getElementById("lista_frases").innerHTML=""
    
    for(contador=0;contador<qtd;contador++){
        document.getElementById("lista_frases").innerHTML+= `<li>${frase}</li>`
    }

    
    // while(contador<qtd){
    //     document.getElementById("lista_frases").innerHTML+= `<li>${frase}</li>`
    //     contador++
    // }

}

function fnLimpaFrase(){
    document.getElementById("lista_frases").innerHTML = ""; 
    document.getElementById("frase").value = ""; 
    document.getElementById("qtd").value = "";
}