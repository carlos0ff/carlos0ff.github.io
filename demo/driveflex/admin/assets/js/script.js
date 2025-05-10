document.addEventListener('DOMContentLoaded', function() {
    // Menu dropdown
    const userProfile = document.getElementById('userProfile');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    userProfile.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
    
    // Fechar dropdown ao clicar fora
    window.addEventListener('click', function(e) {
        if (!userProfile.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Modal
    const modal = document.getElementById('comparisonModal');
    const closeBtn = document.querySelector('.close-btn');
    const compareBtns = document.querySelectorAll('.compare-btn');
    
    compareBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Aviso de demo
    Swal.fire({
        title: 'Aviso Importante',
        html: 'Esta é uma <strong>versão demonstrativa</strong>. O sistema completo possui backend em PHP que não está disponível no GitHub Pages.',
        icon: 'info',
        confirmButtonText: 'Entendi',
        confirmButtonColor: '#036b2e',
        backdrop: `
            rgba(0,0,0,0.7)
            url("assets/images/car-animation.gif")
            center top
            no-repeat
        `,
        allowOutsideClick: false
    });
});