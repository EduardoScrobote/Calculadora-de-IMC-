
function pegarPeso() {
    const peso = document.getElementById("peso")
    return peso.value
}
function pegarAltura() {
    const altura = document.getElementById("altura")
    return altura.value
}
function calculo(elemento) {
    const calculos = Number(pegarAltura()) * Number(pegarAltura());
    const calculoFinal = parseInt(pegarPeso()) / calculos;
    return calculoFinal.toFixed(2)
}
function res () {
const results = document.getElementById("resultss");
results.innerHTML = `<p id="result">seu IMC ${calculo()} </p>`
}
const botao = document.getElementById("calcular")
botao.addEventListener("click", () => res())
