const light = {
  bg: {
    primary: '#f2f2f2 ',
    secondary: '#ffffff',
    tertiary: '#F8F8F8',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  },
  border: {
    primary: '#eff0f5',
    secondary: '#DDDDDD',
    tertiary: '#EAEAEA',
  }
  // ...
}

const dark = {
  bg: {
    primary: '#14181B',
    secondary: '#232A2F',
    tertiary: '#181818',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  },
  border: {
    primary: '#282828',
    secondary: '#2D2D2D',
    tertiary: '#525560'
  }
  // ...
}

const defaultTheme = {
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '18px', // 2
    '22px', // 3
    '26px', // 4
    '32px', // 5
    '40px'  // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  contentWidths: {
    body: '1200px'
  },
  colors: {
    spotifyGreen: '#1DB954',
    blue: '#2C7AF8',
    footerBg: '#14181B',
    footerBorder: '#2E363E'
  },
  buttons: {
    blackTransparent: 'rgba(0,0,0,0.1)',
    whiteTransparent: 'rgba(255,255,255,0.1)'
  }
  // ...
};

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }