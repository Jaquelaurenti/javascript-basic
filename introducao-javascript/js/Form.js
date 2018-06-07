var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault(); // Pausa no Form

    var formAdd = document.querySelector("#form-adicona");

    var paciente = obtemPacientedoForm(formAdd);
    var lOK = false;

    var pacienteTR = MontaTR(paciente);

    if (!validaCampos(paciente)) {
        if (validaDadosAltura(paciente.altura)) {
            lOK = true;
        } else {
            alert("Altura inv�lida!");
            return;
        }

        if (validaDadosPeso(paciente.peso)) {
            lOK = true;
        } else {
            alert("Peso inv�lido!");
            return;
        }

        if (lOK) {
            var tabela = document.querySelector("#tabela-pacientes"); // busco a tabela de paciente
            tabela.appendChild(pacienteTR); // apendo meu a estrutura criada
            formAdd.reset(); //limpo o form
        }

    } else {

        alert("Existem campos que n�o foram preenchidos, verifique!")
        return;
    }
});

/*
Nome: obtemPacientedoForm
Objetivo: Obter o conte�do dos campos
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
Par�metro: Formul�rio do paciente;
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
PAr�metros: Dado > refere-se ao campo do TD que ser� criado;
            classe > a informa��o da classe do TD que est� sendo criado;
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
Par�metros: Objeto Paciente criado atrav�s do Form
*/
function validaCampos(paciente) {
    var lControl = false;

    if (paciente.nome == "" || paciente.nome == null) {
        lControl = true;
        return lControl;
    } else if (paciente.peso == "" || paciente.peso == null) {
        lControl = true;
        return lControl;
    } else if (paciente.altura == "" || paciente.altura == null) {
        lControl = true;
        return lControl;
    } else if (paciente.gordura == "" || paciente.gordura == null) {
        lControl = true;
        return lControl;
    }
}
/**/
function validaDadosAltura(paciente) {
    if (validaAltura(paciente)) {
        return true;
    } else {
        return false;
    }
}

/**/
function validaDadosPeso(paciente) {
    if (validaPeso(paciente)) {
        return true;
    } else {
        return false;
    }
}