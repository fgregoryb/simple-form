document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos de entrada
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const messageElement = document.getElementById('message');

  // Verifica se as senhas correspondem
  if (password !== confirmPassword) {
      messageElement.textContent = 'As senhas não correspondem!';
      return;
  }

  // Exibe mensagem de sucesso e armazena o e-mail no localStorage
  messageElement.textContent = 'Login realizado com sucesso!';
  messageElement.style.color = 'green';
  localStorage.setItem('loggedInUser', email);

  // Redireciona para a página do painel
  setTimeout(() => {
      window.location.href = 'dashboard.html';
  }, 1000);
});

// Redireciona para a página de login se o usuário não estiver autenticado
window.addEventListener('load', function() {
  const emailElement = document.getElementById('userEmail');
  console.log(emailElement)
  if (emailElement) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (!loggedInUser) {
          window.location.href = 'index.html';
      } else {
          emailElement.textContent = `Bem-vindo, ${loggedInUser}`;
      }
  }
});
