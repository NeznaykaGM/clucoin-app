import * as React from 'react';
// libs
import Router from 'next/router';
// @ts-ignore
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// components
import Head from 'next/head';
// providers
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// types
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// hooks
import { useStore } from '@md-shared/hooks/use-store';
// global css
import 'normalize.css/normalize.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>COIN DeX | Play, Earn, Have Fun</title>
        <link rel='icon' href='/apple-touch-icon.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins&display=swap' rel='stylesheet' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default MyApp;
