import React from 'react';
import App from 'next/app';
import withReduxStore from '../components/hoc/withReduxStore';
import { Provider } from 'react-redux';
import { logIsServer } from '../utils/utils';
import AppBar from '../components/appBar/AppBar';
import Footer from '../components/footer/Footer';
import '../css/global.css';
import Head from 'next/head';
import SetLanguageFromStoreWrapper from '../i18n/SetLanguageFromStoreWrapper';
import '../i18n/i18n';
import ScrollTracker from '../components/foundation/scrollTracker/ScrollTracker';
import { IS_SERVER } from '../constants';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    logIsServer('MyApp getInitialProps');

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const url = !IS_SERVER && window.location.pathname;
    const showAppbar = url && !url.includes('dashboard');

    logIsServer('MyApp');
    return (
      <>
        {/*<ThemeProvider theme={{ myTheme, orbit: customTokens }}>*/}
        <Head>
          <title>Rent a property</title>
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <Provider store={store}>
          <SetLanguageFromStoreWrapper>
            <ScrollTracker>
              {showAppbar ? <AppBar /> : null}
              <main className={showAppbar ? 'darkTheme' : ''}>
                <Component {...pageProps} />
              </main>
              {showAppbar ? <Footer /> : null}
            </ScrollTracker>
          </SetLanguageFromStoreWrapper>
        </Provider>
        {/*</ThemeProvider>*/}
      </>
    );
  }
}

export default withReduxStore(MyApp);
