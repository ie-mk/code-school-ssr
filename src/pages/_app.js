// import React from 'react';
// import App from 'next/app';
// import withReduxStore from '../components/hoc/withReduxStore';
// import { Provider } from 'react-redux';
// import { logIsServer } from '../utils/utils';
// import AppBar from '../components/appBar/AppBar';
// import Footer from '../components/footer/Footer';
// import '../css/global.css';
// import Head from 'next/head';
// import SetLanguageFromStoreWrapper from '../i18n/SetLanguageFromStoreWrapper';
// import '../i18n/i18n';
// import ScrollTracker from '../components/foundation/scrollTracker/ScrollTracker';

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};

//     logIsServer('MyApp getInitialProps');

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps, store } = this.props;
//     logIsServer('MyApp');
//     return (
//       <>
//         {/*<ThemeProvider theme={{ myTheme, orbit: customTokens }}>*/}
//         <Head>
//           <title>Rent a property</title>
//           <link
//             href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//             rel="stylesheet"
//           />
//         </Head>
//         <Provider store={store}>
//           <SetLanguageFromStoreWrapper>
//             <ScrollTracker>
//               <AppBar />
//               <main>
//                 <Component {...pageProps} />
//               </main>
//               <Footer />
//             </ScrollTracker>
//           </SetLanguageFromStoreWrapper>
//         </Provider>
//         {/*</ThemeProvider>*/}
//       </>
//     );
//   }
// }

// export default withReduxStore(MyApp);

import React from 'react';
import NextApp from 'next/app';
import MonacoEditor from 'react-monaco-editor';

export default class App extends NextApp {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor, monaco);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;

    const options = {
      selectOnLineNumbers: true,
    };

    return (
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}
