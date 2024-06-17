import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#FFBB00',
    },
    background: {
      default: '#F7F7F7',
    },
    text: {
      primary: '#353535',
      secondary: '#A0A0A0',
    },
  },
});

export default theme;
