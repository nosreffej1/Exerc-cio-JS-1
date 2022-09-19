//Minha resolução 
const name = prompt("Qual o seu nome, turista?")

let wentToCity = parseFloat(prompt("Você já visitou alguma cidade?\n\n1-Sim\n2-Não"))
let citys = ""
let numberOfCitys = 0

while(wentToCity === 1){

     citys += prompt("Qual?") + "\n"
     numberOfCitys += 1
     wentToCity = parseFloat(prompt("Alguma outra?\n\n1-Sim\n2-Não"))

}
alert(
    "Lista de cidades visitadas por " + name + ".\n\n" + 
    "Cidades: " + "\n" + citys +
    "\nNumero de cidades: " + numberOfCitys
)


// Resolução do exercício

/* 

const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while(continuar === "Sim"){
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)

*/