tailwind.config = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/image/background_bmw.jpg')",
      },
      colors: {
        primary: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        matrix: {
          green: '#00ff41',
          dark: '#003b00'
        }
      },
      boxShadow: {
        'retro': '0 4px 14px 0 rgba(255, 107, 107, 0.2)',
      }
    }
  }
}