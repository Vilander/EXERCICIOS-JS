let dataAtual = new Date();
console.log(dataAtual.getDay)

let diaDaSemana = dataAtual.getDay()

// if(diaDaSemana==0){
//     document.getElementById("resposta").innerText ="Domingo"
// }else if(diaDaSemana==1){
//     document.getElementById("resposta").innerText ="Segunda-feira"
// }else if(diaDaSemana==2){
//     document.getElementById("resposta").innerText ="Terça-feira"
// }else if(diaDaSemana==3){
//     document.getElementById("resposta").innerText ="Quarte-feira"
// }else if(diaDaSemana==4){
//     document.getElementById("resposta").innerText ="Quinta-feira"
// }else if(diaDaSemana==5){
//     document.getElementById("resposta").innerText ="Sexta-feira"
// }else if(diaDaSemana==6){
//     document.getElementById("resposta").innerText ="Sábado"
// }

switch (diaDaSemana){
    case 0:
        document.getElementById("resposta").innerHTML ="Domingo"
        break
    case 1:
        document.getElementById("resposta").innerHTML ="Segunda-Feira"
        break
    case 2:
        document.getElementById("resposta").innerHTML ="Terça-Feira"
        break
    case 2:
        document.getElementById("resposta").innerHTML ="Quarta-Feira"
        break
    case 3:
        document.getElementById("resposta").innerHTML ="Quinta-Feira"
        break
    case 4:
        document.getElementById("resposta").innerHTML ="Sexta-Feira"
        break
    case 5:
        document.getElementById("resposta").innerHTML ="Sábado"
        break
}
