/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: '#1E293B',
          deep: '#0F172A',
          mid: '#334155',
          light: '#475569',
        },
        emerald: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#34D399',
          pale: '#D1FAE5',
        },
        amber: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FCD34D',
          pale: '#FEF3C7',
        },
        neutral: {
          DEFAULT: '#F8FAFC',
          dark: '#E2E8F0',
          pale: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.9s ease-out forwards',
        'slide-in-blur': 'slideInBlur 1.1s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.8s ease-out forwards',
        'wave-float': 'waveFloat 6s ease-in-out infinite',
        'pulse-amber': 'pulseAmber 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)', filter: 'blur(8px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        slideInBlur: {
          from: { opacity: '0', transform: 'translateX(-32px)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'translateX(0)', filter: 'blur(0px)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.94)', filter: 'blur(4px)' },
          to: { opacity: '1', transform: 'scale(1)', filter: 'blur(0px)' },
        },
        waveFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(4px) rotate(-0.5deg)' },
        },
        pulseAmber: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245,158,11,0)' },
        },
      },
      boxShadow: {
        'slate': '0 20px 60px -15px rgba(15,23,42,0.5)',
        'amber-glow': '0 8px 32px -8px rgba(245,158,11,0.5)',
        'emerald-glow': '0 8px 32px -8px rgba(16,185,129,0.5)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}