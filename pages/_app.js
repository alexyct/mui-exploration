import '../styles/globals.css';

import Head from 'next/head';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { typography } from '../styles/typography';
import { palette } from '../styles/palette';

const theme = createTheme({
  palette: palette,
  typography: typography,
  overrides: {
    MuiTypography: {
      h3: {
        '&.MuiTypography-gutterBottom': {
          marginBottom: '20px',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
