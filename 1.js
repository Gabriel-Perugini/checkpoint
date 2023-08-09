let promocao = true 
if(promocao){
console.log("Hora de comprar!")
} else {
    console.log("Hora de esperar :(")
}

let fome = 7
if(fome<=7){
    console.log("Podemos esperar!")
} else if(fome>=7){
    console.log("Hora de comer!")
}

let sono = true
let nivelCansaco = 6

if(sono = true & nivelCansaco >= 6){
    console.log("Hora de dormir!")
} else{
    console.log("Não é hora de dormir!")
}

let estacao = "Inverno";

if (estacao === "Inverno") {
    console.log("É inverno, Tudo está coberto de neve!");
} else if (estacao === "Outono") {
    console.log("É outono! As folhas estão caindo!");
} else if (estacao === "Verão") {
    console.log("É ensolarado e quente porque é verão!");
} else if (estacao === "Primavera") {
    console.log("É primavera");
}

let posicaoFinalAtleta = 'primeiro lugar';

switch (posicaoFinalAtleta) {
  case 'primeiro lugar':
    console.log('Medalha de ouro para você!');
    break;
  case 'segundo lugar':
    console.log('Medalha de prata para você!');
    break;
  case 'terceiro lugar':
    console.log('Medalha de bronze  para você!')
  default:
    console.log('Nenhuma medalha concedida.');
    break;
}