const times = [
  "Atlético Mineiro",
  "Bahia",
  "Botafogo",
  "Ceará",
  "Corinthians",
  "Cruzeiro",
  "Flamengo",
  "Fluminense",
  "Fortaleza",
  "Grêmio",
  "Internacional",
  "Juventude",
  "Mirassol",
  "Palmeiras",
  "Red Bull Bragantino",
  "Santos",
  "São Paulo",
  "Sport",
  "Vasco da Gama",
  "Vitória",
];

const estadios = [
  "Arena MRV", // Atlético Mineiro
  "Casa de Apostas Arena Fonte Nova", // Bahia
  "Estádio Nilton Santos", // Botafogo
  "Arena Castelão", // Ceará
  "Neo Química Arena", // Corinthians
  "Mineirão (Estádio Governador Magalhães Pinto)", // Cruzeiro
  "Maracanã", // Flamengo
  "Maracanã", // Fluminense
  "Arena Castelão", // Fortaleza
  "Arena do Grêmio", // Grêmio
  "Beira-Rio", // Internacional
  "Alfredo Jaconi", // Juventude
  "Campos Maia", // Mirassol
  "Allianz Parque", // Palmeiras
  "Nabi Abi Chedid", // Red Bull Bragantino
  "Vila Belmiro", // Santos
  "Morumbi", // São Paulo
  "Ilha do Retiro", // Sport
  "São Januário", // Vasco da Gama
  "Barradão", // Vitória
];

function fnListaTimes() {
    for(let i = 0;i<times.length;i++){
        document.getElementById("lista_times").innerHTML += 
        `<div class="col-12 border text-center p-2">
            ${times[i]} - ${estadios[i]}
        </div>`;
    }
}

fnListaTimes();
