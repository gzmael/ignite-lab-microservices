module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        red: {
          100: '#FFE6E6',
          200: '#FFACAF',
          300: '#FF787D',
          400: '#F9484E',
          500: '#ed1c24',
          600: '#D9161D',
          700: '#C41117',
          800: '#AE0C12',
          900: '#97080E',
        },
        orange: {
          100: '#FFF0E6',
          200: '#FFD0AC',
          300: '#FFB074',
          400: '#FE9043',
          500: '#f47216',
          600: '#DF6610',
          700: '#C95A0B',
          800: '#B34E07',
          900: '#994304',
        },
        lightBlue: {
          100: '#E6F9FF',
          200: '#ACE9FF',
          300: '#73D7FF',
          400: '#39C3FB',
          500: '#00adef',
          600: '#009DDB',
          700: '#008DC6',
          800: '#007DB0',
          900: '#006C99',
        },
        blue: {
          100: '#E6EFFB',
          200: '#B0CCEE',
          300: '#7DA8DE',
          400: '#4E86CC',
          500: '#2163b6',
          600: '#1B59A6',
          700: '#164F96',
          800: '#124585',
          900: '#0E3B74',
        },
        purple: {
          100: '#F4E9F4',
          200: '#DAB8DB',
          300: '#BF8AC0',
          400: '#A25CA3',
          500: '#833184',
          600: '#772B78',
          700: '#6B256C',
          800: '#5F1F60',
          900: '#521A53',
        },
        pink: {
          100: '#FFE6F4',
          200: '#FFACDC',
          300: '#FF73C2',
          400: '#F639A8',
          500: '#e9018c',
          600: '#D5007F',
          700: '#C10071',
          800: '#AC0064',
          900: '#960056',
        }
      },
    },
  },
  variants: {},
  plugins: [],
};