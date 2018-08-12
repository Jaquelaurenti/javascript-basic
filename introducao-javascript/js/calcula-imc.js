var titulo = document.querySelector(".titulo");
titulo.textContent = "Espa�o Vida Saud�vel";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var lControlP = validaPeso(peso);
    var lControlA = validaAltura(altura);

    if (!lControlP) {
        tdImc.textContent = "Peso inv�lido";
        paciente.classList.add("paciente-invalido");
        lControlP = false;
    }

    if (!lControlA) {
        tdImc.textContent = "Altura inv�lido";
        paciente.classList.add("paciente-invalido");
        lControlA = false;
    }

    if (lControlA && lControlP) {
        var imc = peso / (altura * altura);
        tdImc.textContent = calculaImc(peso, altura);
    }
}
/*
Nome: ValidaPeso
Objetivo: Validar se o peso inserido � valido
Par�metros: Peso do Campo
*/
function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
/*
Nome: validaAltura
Objetivo: Validar se a altura inserida � v�lida
Par�metros: Altura do campo*/
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
/*
Nome: CalculaIMC
Objetivo: Calcular o IMC inserido
Par�metros: Peso e altura que vem do Form
*/
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}