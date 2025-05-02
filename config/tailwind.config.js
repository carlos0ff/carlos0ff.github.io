tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        dark: {
          800: '#1f2937', 
          900: '#111827', 
        }
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6)',
      }
    }
  }
}