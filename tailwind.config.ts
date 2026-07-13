import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F0F12',
        surface: '#1A1B20',
        accent: '#C8FF3C',
        accent2: '#FF8A3D',
        success: '#3DDC97',
        textPrimary: '#F5F5F0',
        textSecondary: '#A8A8B3',
        border: '#2B2C33',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '80px',
        '8': '120px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4)',
        cardHover: '0 12px 24px rgba(0,0,0,0.5)',
        cartGlow: '0 8px 30px rgba(200,255,60,0.25)',
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-l': ['40px', { lineHeight: '1.15', fontWeight: '700' }],
        'heading-m': ['28px', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-s': ['20px', { lineHeight: '1.25', fontWeight: '600' }],
        'body-l': ['16px', { lineHeight: '1.6' }],
        'body-s': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase' }],
      },
    },
  },
  plugins: [],
}

export default config