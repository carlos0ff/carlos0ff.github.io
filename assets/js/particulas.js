document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  
  const binaryChars = "01";
  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);
  const drops = Array(columns).fill(1);
  

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      
      const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
      const y = drops[i] * fontSize;
      
      ctx.fillText(text, i * fontSize, y);
      
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      
      drops[i]++;
    }
  }
  
  setInterval(drawMatrix, 50);
  
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});