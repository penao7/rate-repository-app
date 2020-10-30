import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: 'hsl(200, 100%, 30%)',
    appbar: '#24292e',
    tabText: 'white',
    languageText: 'white',
    tabBackGround: 'hsl(200, 100%, 30%);',
    buttonPrimary: 'hsl(200, 100%, 45%);',
    buttonDanger: 'salmon',
    buttonPrimaryText: 'white'
  },
  fontSizes: {
    body: 14,
    subheading: 13,
    heading: 20,
    tab: 20
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'sans-serif',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;