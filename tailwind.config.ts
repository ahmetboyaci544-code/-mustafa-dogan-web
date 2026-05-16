import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        s: {
          black: '#0D0D0D',
          deep: '#151515',
          surface: '#1D1D1D',
          border: '#252525',
          muted: '#A1A1A1',
          text: '#F5F5F5',
          gold: '#14305c',
          'gold-glow': 'rgba(199,167,108,0.12)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 50s linear infinite',
        'ticker-rev': 'tickerRev 50s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
