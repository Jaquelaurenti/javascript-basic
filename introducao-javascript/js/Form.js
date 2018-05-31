var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault(); // Pausa no Form

    var formAdd = document.querySelector("#form-adicona");

    var paciente = obtemPacientedoForm(formAdd);

    var pacienteTR = MontaTR(paciente);

    if (validaCampos(paciente)) {
        var tabela = document.querySelector("#tabela-pacientes"); // busco a tabela de paciente
        tabela.appendChild(pacienteTR); // apendo meu a estrutura criada
        formAdd.reset(); //limpo o form
    } else {

        alert("Existem campos que não foram preenchidos, verifique!")
        return null;
    }

    var tabela = document.querySelector("#tabela-pacientes"); // busco a tabela de paciente
    tabela.appendChild(pacienteTR); // apendo meu a estrutura criada
    formAdd.reset(); //limpo o form

});

/*
Nome: obtemPacientedoForm
Objetivo: Obter o conteúdo dos campos
*/

function obtemPacientedoForm(form) {

    var paciente = {
        nome: (form.nome.value),
        peso: (form.peso.value),
        altura: (form.altura.value),
        gordura: (form.gordura.value),
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

/*
Nome: MontaTR
Objetivo: Montar os TR's e os TD's com base no DOM
Parâmetro: Formulário do paciente;
*/
function MontaTR(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(MontaTD(paciente.nome, "info-nome"))
    pacienteTr.appendChild(MontaTD(paciente.peso, "info-peso"))
    pacienteTr.appendChild(MontaTD(paciente.altura, "info-altura"))
    pacienteTr.appendChild(MontaTD(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(MontaTD(paciente.imc, "info-imc"))

    return pacienteTr;
}

/*
Nome: MontaTD
Objetivo: Monta os Td's com base no DOM
PArâmetros: Dado > refere-se ao campo do TD que será criado;
            classe > a informação da classe do TD que está sendo criado;
*/
function MontaTD(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
/*
Nome: ValidaCampos
Objetivo: Verificar se  campo foi preenchido
Parâmetros: Objeto Paciente criado através do Form
*/
function validaCampos(paciente) {
    var lControl = false;

    if (paciente.nome == "" || paciente.nome == null) {
        lControl = true;
        elseif(paciente.peso == "" || paciente.peso == null)
        lControl = true;
        elseif(paciente.altura == "" || paciente.altura == null)
        lControl = true;
        elseif(paciente.gordura == "" || paciente.gordura == null)
        lControl = true;
    }
    return lControl;
}