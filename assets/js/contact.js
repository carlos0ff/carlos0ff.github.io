import { isValidEmail, isEmpty } from './utils/validators.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // impede o envio automático do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação
    if (isEmpty(name)) {
      alert('Por favor, preencha o nome.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    if (isEmpty(message)) {
      alert('Por favor, escreva uma mensagem.');
      return;
    }

    // Se passou por todas as validações
    alert('Formulário enviado com sucesso!');
    form.reset(); // limpa o formulário
  });
});
