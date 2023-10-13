<!DOCTYPE html>
<html lang="pt-br">
<head>
  <title>Formulário de Cadastro de Pacientes</title>
  <meta charset="utf-8"/>
  <style>
    /* Estilos do formulário */
    form {
      width: 600px;
      margin: 20px auto;
      border: 1px solid #ccc;
      padding: 20px;
      box-sizing: border-box;
    }

    h1 {
      text-align: center;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input, select {
      width: 100%;
      height: 25px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      outline: none;
    }

    input[type="radio"] {
      width: auto;
      display: inline-block;
    }

    input[type="submit"] {
      width: auto;
      height: auto;
      background-color: green;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    input[type="reset"] {
      width: auto;
      height: auto;
      background-color: red;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    /* Estilos das mensagens de erro e sucesso */
    .erro {
      color: red;
      font-weight: bold;
    }

    .sucesso {
      color: green;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <form id="form-cadastro" action="#" method="post">
    <h1>Formulário de Cadastro de Pacientes</h1>
    <label for="txtNumero">Número:</label>
    <input type="text" id="txtNumero" name="numero" required/>
    <span id="erro-numero" class="erro"></span>
    
    <label for="txtNome">Nome:</label>
    <input type="text" id="txtNome" name="nome" required/>
    <span id="erro-nome" class="erro"></span>

    <label for="lbSexo">Sexo:</label>
    <input type="radio" id="rbMasculino" name="sexo" value="masculino" checked/>Masculino
    <input type="radio" id="rbFeminino" name="sexo" value="feminino"/>Feminino
    <span id="erro-sexo" class="erro"></span>

    <label for="dataNasc">Data Nascimento:</label>
    <input type="date" id="dataNasc" name="dataNasc" required/>
    <span id="erro-dataNasc" class="erro"></span>

    <label for="txtEmail">Email:</label>
    <input type="email" id="txtEmail" name="email"/>
    <span id="erro-email" class="erro"></span>

    <label for="txtTelefone">Telefone:</label>
    <input type="tel" id="txtTelefone" name="telefone"/>
    <span id="erro-telefone" class="erro"></span>

    <label for="txtEndereco">Endereço:</label>
    <input type="text" id="txtEndereco" name="endereco"/>
    
    <input type="submit" id="btnEnviar" value="Enviar"/>
    <input type="reset" id="btnCancelar" value="Cancelar"/>

    <p id="msg-sucesso" class="sucesso"></p>
  </form>

  <!-- Script JavaScript para validar o formulário -->
  <script>
    
     // Função para validar o número do paciente
     function validarNumero(numero) {
       // O número deve ser um inteiro positivo
       var regex = /^\d+$/; // Expressão regular para números inteiros
       return regex.test(numero); // Retorna verdadeiro se o número for válido, falso caso contrário
     }

     // Função para validar o nome do paciente
     function validarNome(nome) {
       // O nome deve ter pelo menos 3 caracteres e não pode conter números ou símbolos
       var regex = /^[a-zA-Z\s]{3,}$/; // Expressão regular para letras e espaços
       return regex.test(nome); // Retorna verdadeiro se o nome for válido, falso caso contrário
     }

     // Função para validar o email do paciente
     function validarEmail(email) {
       // O email deve seguir o formato padrão: usuario@dominio
       var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Expressão regular para emails válidos
       return regex.test(email); // Retorna verdadeiro se o email for válido, falso caso contrário
     }

     // Função para validar o telefone do paciente
     function validarTelefone(telefone) {
       // O telefone deve ter 11 dígitos no formato (XX) XXXXX-XXXX
       var regex = /^\(\d{2}\) \d{5}-\d{4}$/; // Expressão regular para telefones válidos
       return regex.test(telefone); // Retorna verdadeiro se o telefone for válido, falso caso contrário
     }

     // Função para validar a data de nascimento do paciente
     function validarDataNasc(dataNasc) {
       // A data de nascimento deve ser anterior à data atual
       var hoje = new Date(); // Data atual
       var nasc = new Date(dataNasc); // Data de nascimento informada
       return nasc < hoje; // Retorna verdadeiro se a data de nascimento for válida, falso caso contrário
     }

     // Função para validar todo o formulário
     function validarFormulario() {
       // Obtém os elementos do formulário pelo id
       var txtNumero = document.getElementById("txtNumero");
       var txtNome = document.getElementById("txtNome");
       var rbMasculino = document.getElementById("rbMasculino");
       var rbFeminino = document.getElementById("rbFeminino");
       var dataNasc = document.getElementById("dataNasc");
       var txtEmail = document.getElementById("txtEmail");
       var txtTelefone = document.getElementById("txtTelefone");
       
       // Obtém os valores dos campos do formulário
       var numero = txtNumero.value;
       var nome = txtNome.value;
       var sexo = rbMasculino.checked ? "masculino" : "feminino";
       var dataNascValue = dataNasc.value;
       var email = txtEmail.value;
       var telefone = txtTelefone.value;

       // Obtém os elementos das mensagens de erro pelo id
       var erroNumero = document.getElementById("erro-numero");
       var erroNome = document.getElementById("erro-nome");
       var erroSexo = document.getElementById("erro-sexo");
       var erroDataNasc = document.getElementById("erro-dataNasc");
       var erroEmail = document.getElementById("erro-email");
       var erroTelefone = document.getElementById("erro-telefone");

       // Obtém o elemento da mensagem de sucesso pelo id
       var msgSucesso = document.getElementById("msg-sucesso");

       // Variável para indicar se o formulário é válido ou não
       var valido = true;

      // Valida cada campo do formulário e mostra a mensagem de erro se necessário

      if (!validarNumero(numero)) {
        erroNumero.innerHTML = "Número inválido. Digite um número inteiro positivo.";
        valido = false;
      } else {
        erroNumero.innerHTML = "";
      }

      if (!validarNome(nome)) {
        erroNome.innerHTML = "Nome inválido. Digite um nome com pelo menos 3 letras e sem números ou símbolos.";
        valido = false;
      } else {
        erroNome.innerHTML = "";
      }

      if (!validarDataNasc(dataNascValue)) {
        erroDataNasc.innerHTML = "Data de nascimento inválida. Digite uma data anterior à data atual.";
        valido = false;
      } else {
        erroDataNasc.innerHTML = "";
      }

      if (email != "" && !validarEmail(email)) {
        erroEmail.innerHTML = "Email inválido. Digite um email no formato usuario@dominio.";
        valido = false;
      } else {
        erroEmail.innerHTML = "";
      }

      if (telefone != "" && !validarTelefone(telefone)) {
        erroTelefone.innerHTML = "Telefone inválido. Digite um telefone no formato (XX) XXXXX-XXXX.";
        valido = false;
      } else {
        erroTelefone