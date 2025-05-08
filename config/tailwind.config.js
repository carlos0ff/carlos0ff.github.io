tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        },
        retro: {
          500: '#ff6b6b',
          600: '#f06595',
          700: '#cc5de8',
          800: '#845ef7',
        }
      },
      boxShadow: {
        'retro': '0 4px 14px 0 rgba(255, 107, 107, 0.2)',
      }
    }
  }
}