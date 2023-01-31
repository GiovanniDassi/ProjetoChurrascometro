
// carne 400 g por pessoa + 6 horas = 650
// Cerveja 1200ml por pessoa + 6 h = 2000 ml
// Refri/ agua = 1000 ml por pessoa + 6 h = 1500 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado")

function calcular(){

  console.log("Calculando ...")

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qntTotalCerveja = cervejaPP(duracao) * adultos;
  let qntTotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);


  resultado.innerHTML = `<p>${qntTotalCarne/1000} KG de Carne </p>`
  resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja / 355)} Latas de Cerveja </p>`
  resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas / 2000)} L de Refri/Água </p>`

}

function MouseOn(element){
  element.style.backgroundColor = "#eed963";
}

function MouseOut(element){
  element.style.backgroundColor = "yellow";
}

function carnePP(duracao){
  if (duracao >= 6) {
    return 650;
  }
  else {
    return 400;
  }
}

function cervejaPP(duracao){
  if (duracao >= 6) {
    return 2000;
  }
  else {
    return 1200;
  }
}

function bebidasPP(duracao){
  if (duracao >= 6) {
    return 1500;
  }
  else {
    return 1000;
  }
}