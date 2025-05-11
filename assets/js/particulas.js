
// Configuração da Matriz Binária
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  
  // Configurações
  const binaryChars = "01";
  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);
  const drops = Array(columns).fill(1);
  
  // Ajustar canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Desenhar a matriz
  function drawMatrix() {
    // Fundo semi-transparente para efeito de rastro
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Cor do texto (verde matrix)
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;
    
    // Para cada coluna
    for (let i = 0; i < drops.length; i++) {
      // Caractere aleatório
      const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
      
      // Posição Y do caractere
      const y = drops[i] * fontSize;
      
      // Desenhar o caractere
      ctx.fillText(text, i * fontSize, y);
      
      // Reiniciar no final da tela com probabilidade
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Mover para baixo
      drops[i]++;
    }
  }
  
  // Animação
  setInterval(drawMatrix, 50);
  
  // Redimensionamento
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});