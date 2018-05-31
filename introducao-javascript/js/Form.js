var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){ // adicionando um evento ao botão através do click
      event.preventDefault();
      var formAdd = document.querySelector("#form-adicona");

      // Extraindo as informações do Form

      var nomeAdd = (formAdd.nome.value);
      var pesoAdd = (formAdd.peso.value);
      var alturaAdd = (formAdd.altura.value);
      var gorduraAdd = (formAdd.gordura.value);

      // criando o elemento TR para montar a estrutura do formulário
      var pacienteTr = document.createElement("tr");
      var nomeTd = document.createElement("td");
      var pesoTd = document.createElement("td");
      var alturaTd = document.createElement("td");
      var gorduraTd = document.createElement("td");
      var imcTd = document.createElement("td");

      // adiciono o conteúdo das varíaveis dentro das tds criadas para os elementos não ficarem soltos
      nomeTd.textContent = nomeAdd ;
      pesoTd.textContent = pesoAdd ;
      alturaTd.textContent = alturaAdd ;
      gorduraTd.textContent = gorduraAdd ;
      imcTd.textContent = calculaImc(pesoAdd,alturaAdd);

      // adiciono os TD's criados dentro da pacienteTr > tr pai > td filho

      pacienteTr.appendChild(nomeTd);
      pacienteTr.appendChild(pesoTd);
      pacienteTr.appendChild(alturaTd);
      pacienteTr.appendChild(gorduraTd);
      pacienteTr.appendChild(imcTd);
      // busco a tbody (tabela-paciente) do Html para adicionar dentro da tabelas os registros extraídos acima
      // adicionando o paciente na tabela
      var tabela = document.querySelector("#tabela-pacientes");
      tabela.appendChild(pacienteTr);

});
