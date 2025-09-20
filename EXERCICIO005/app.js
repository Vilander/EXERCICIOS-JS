function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById('periodo').value;

    // document.getElementById('resposta').innerText = periodoSelecionado;

    if(periodoSelecionado=="d"){
        document.getElementById("resposta").innerText ='Manhã 🌤️'
        document.body.style.backgroundColor ="#78c4f76e"
        document.body.style.color ="#324e5e"
        document.getElementById("foto").src="./bdia.jpg"
    }else if(periodoSelecionado =="t"){
        document.getElementById("resposta").innerText ='Tarde ☀️'
        document.body.style.backgroundColor ="#e2a704f6"
        document.body.style.color ="#381e15"
        document.getElementById("foto").src="./btarde.jpg"
    }else if (periodoSelecionado=="n"){
        document.getElementById("resposta").innerText = 'Noite 🌙'
        document.body.style.backgroundColor ="#303030ef"
        document.body.style.color ="#f0efe8"
        document.getElementById("foto").src="./bnoite.jpg"
    } else{
        document.getElementById("resposta").innerText =""
        document.body.style.backgroundColor ="#bda8f513"
        document.body.style.color ="#15055a"
        document.getElementById("foto").src="./boriginal.jpg"
    }

}