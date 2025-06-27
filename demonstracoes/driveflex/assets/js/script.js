 // Mostrar/ocultar senha
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Demo alert adaptado ao tema
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.backgroundColor = isDarkMode ? '#1f2937' : '#ffffff';
    alertBox.style.color = isDarkMode ? '#f3f4f6' : '#1f2937';
    alertBox.style.padding = '1rem';
    alertBox.style.borderRadius = '0.5rem';
    alertBox.style.border = `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`;
    alertBox.style.boxShadow = `0 4px 6px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`;
    alertBox.style.maxWidth = '90%';
    alertBox.style.width = 'max-content';
    alertBox.style.textAlign = 'center';
    alertBox.style.zIndex = '1000';
    alertBox.innerHTML = `
        <p style="margin-bottom: 0.5rem;"><strong>Aviso:</strong> Esta é uma versão demonstrativa</p>
        <small style="opacity: 0.8;">O sistema completo possui backend em PHP</small>
    `;
    
    document.body.appendChild(alertBox);
    
    // Remover após 8 segundos
    setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.transition = 'opacity 0.5s ease';
        setTimeout(() => alertBox.remove(), 500);
    }, 8000);
});
