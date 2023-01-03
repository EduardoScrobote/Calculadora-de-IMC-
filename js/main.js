function pegarPeso() {
    const peso = document.getElementById("peso");
    return peso.value;
}
function pegarAltura() {
    const altura = document.getElementById("altura");
    return altura.value;
}
function calculo() {
    const calculos = Number(pegarAltura()) * Number(pegarAltura());
    const calculoFinal = parseInt(pegarPeso()) / calculos;
    return Number(calculoFinal.toFixed(2));
}
function res(calculo) {
    let result;
    if (calculo <= 18) {
        return (res = `<p>Seu imc é ${calculo}, e você está abaixo do peso</p>`);
    } else if (calculo <= 24.9 && calculo >= 18) {
        return (res = `<p>Seu imc é ${calculo}, e você está com o peso normal</p>`);
    } else if (calculo <= 29.9 && calculo >= 24.9) {
        return (res = `<p>Seu imc é ${calculo}, e você está com sobre peso</p>`);
    } else if (calculo <= 34.9 && calculo >= 30) {
        return (res = `<p>Seu imc é ${calculo}, e você está com obesidade grau 1</p>`);
    } else if (calculo <= 39.9 && calculo >= 35) {
        return (res = `<p>Seu imc é ${calculo}, você está com sobre peso 2</p>`);
    } else if (calculo >= 40) {
        return (res = `<p>Seu imc é ${calculo}, e você está com sobre peso 3</p>`);
    } else {
        calculo = isNaN;
        return (res = "<p>Imposivel calcular seu Imc</p>");
    }
}
const results = document.getElementById("resultss");

const botao = document.getElementById("calcular");
botao.addEventListener("click", () => {
    results.innerHTML = res(calculo())
});
