const form = document.getElementById('form-valor');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const valorA = document.getElementById('valorA').value;
  const valorAform = parseInt(valorA);
  const valorB = document.getElementById('valorB').value;
  const valorBform = parseInt(valorB);

  const mensagemSucesso = "Tudo certo! Valor B é maior que o Valor A";
  const mensagemErro = "Vamos tentar novamente! Valor B não é maior que o Valor A";

  const containerMensagemSucesso = document.querySelector('.success-message');
  containerMensagemSucesso.innerHTML = mensagemSucesso;

  const containerMensagemErro = document.querySelector('.error-message');
  containerMensagemErro.innerHTML = mensagemErro;

  if (valorAform == '' || valorB == '') {
    alert('Informe os valores de A e B');
    return false;
  }

  if (valorBform > valorAform) {
    alert('Valor B é maior que Valor A')
    containerMensagemSucesso.style.display = 'block';
    containerMensagemErro.style.display = 'none';

  } else {
    alert('Valor B não é maior que Valor A')
    containerMensagemErro.style.display = 'block';
    containerMensagemSucesso.style.display = 'none';
  }

  document.getElementById('valorA').value = '';
  document.getElementById('valorB').value = '';
})