var titulo = document.querySelector(".titulo");
titulo.textContent = "Espa√ßo Vida Saud√°vel";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var lControlP = true;
    var lControlA = true;

    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inv·lido";
        paciente.classList.add("paciente-invalido");
        lControlP = false;
    }

    if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura inv·lido";
        paciente.classList.add("paciente-invalido");
        lControlA = false;
    }

    if (lControlA && lControlP) {
        var imc = peso / (altura * altura);
        tdImc.textContent = calculaImc(peso, altura);
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);

}