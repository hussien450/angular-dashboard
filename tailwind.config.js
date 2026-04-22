/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#0a0e1a',
        'app-surface': '#111827',
        'app-border': 'rgba(255,255,255,0.08)',
        'app-accent': '#6c63ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  safelist: [
    // Status colors used dynamically in components
    'bg-green-500/20', 'text-green-400', 'border-green-500/30',
    'bg-amber-500/20', 'text-amber-400', 'border-amber-500/30',
    'bg-red-500/20',   'text-red-400',   'border-red-500/30',
    'bg-blue-500/20',  'text-blue-400',  'border-blue-500/30',
    'bg-purple-500/20','text-purple-400','border-purple-500/30',
    'bg-slate-500/20', 'text-slate-400', 'border-slate-500/30',
    'bg-indigo-500/20','text-indigo-400','border-indigo-500/30',
    'text-green-300', 'text-amber-300', 'text-red-300',
  ],
  plugins: [],
};
