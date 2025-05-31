function buscarCertificado() {
    const input = document.getElementById('certificate-code');
    const codigo = input.value.trim();

    const title = document.getElementById('verification-title');
    const message = document.getElementById('verification-message');
    const imageContainer = document.getElementById('certificate-image-container');

    if (!codigo) {
        alert('Por favor, digite o código do certificado.');
        input.focus();
        return;
    }

    // Reset para conteúdo padrão antes de avaliar
    title.textContent = 'Certificado DevCampus';
    message.textContent = 'Veja como seu certificado será emitido após a conclusão do curso ou mentoria. Autêntico, moderno e pronto para fortalecer seu portfólio profissional.';
    imageContainer.style.display = 'block';
    
    imageContainer.querySelector('img').src = 'https://marketplace.canva.com/EAFYPPj1Lsk/1/0/1600w/canva-certificado-de-conclus%C3%A3o-simples-azul-GSpXqEfjO7Y.jpg';
    imageContainer.querySelector('img').alt = 'Certificado DevCampus';

    // Simulação simples da validação do código
    if (codigo.toUpperCase().startsWith('DC')) {
        title.textContent = `Certificado válido: ${codigo}`;
        message.textContent = 'Seu certificado foi autenticado com sucesso.';
        imageContainer.style.display = 'block';
    } else {
        title.textContent = 'Certificado não encontrado';
        message.textContent = 'Não conseguimos encontrar um certificado com esse código. Verifique e tente novamente.';
        imageContainer.style.display = 'none'; 
    }

    document.getElementById('verification').scrollIntoView({ behavior: 'smooth' });
}