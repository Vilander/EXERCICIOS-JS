let numeroDeVagas=[]
let veiculos = []

function fnSalvarVeiculo(){
    numeroDeVagas.push(document.getElementById("numero-vaga").value)
    veiculos.push(document.getElementById("veiculo").value)
    
}


function fnListarVeiculo(){
    // console.dir(numeroDeVagas)
    // console.dir(veiculos)
    /*
    let i = 0
    while(i < veiculos.length){
        console.log(veiculos[i], numeroDeVagas[i])
        i++
    }
    */
    //for(declaração contador; condição; incremento){}
    document.getElementById("tabela_veiculos").innerHTML=''
    for(let i = 0; i < veiculos.length; i++){
        document.getElementById("tabela_veiculos").innerHTML +=`<tr><td>${numeroDeVagas[i]}</td><td>${veiculos[i]}</td></tr>`
        
    }
}

function fnLimpar(){
    document.getElementById("form_veiculos").reset()
}