var titulo = document.querySelector(".titulo") ;
titulo.textContent = "Espaço Vida Saudável";

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
        console.log("Peso Inválido!")
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        lControlP = false;
        console.log(lControlP);
    }

    if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
        lControlA = false;
    }

  if (lControlA && lControlP) {
        var imc = peso / (altura * altura);
        tdImc.textContent = calculaImc(peso,altura);
    }
}


function calculaImc(peso, altura){
    var imc = 0 ;
    imc = peso / (altura * altura);

    return imc.toFixed(2) ;

}
