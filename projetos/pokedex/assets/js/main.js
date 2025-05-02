document.addEventListener('DOMContentLoaded', function() {

    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });

    const genButtons = document.querySelectorAll('.gen-button');

    genButtons.forEach(button => {
      button.addEventListener('click', () => {
        genButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
    
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    searchButton.addEventListener('click', () => {
      if(searchInput.value.trim() !== '') {
        alert(`Buscando por: ${searchInput.value}`);
      }
    });
    
    searchInput.addEventListener('keypress', (e) => {
      if(e.key === 'Enter' && searchInput.value.trim() !== '') {
        alert(`Buscando por: ${searchInput.value}`);
      }
    });
});