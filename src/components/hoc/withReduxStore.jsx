import React from 'react';
import PropTypes from 'prop-types';
import { getOrCreateStore } from '../../store/store';
import { isServer } from '../../utils/utils';
import { IS_SERVER } from '../../constants';

// creates redux store and sets it on the context
export default App => {
  return class AppWithRedux extends React.Component {
    // static async getInitialProps(appContext) {
    //   const store = getOrCreateStore();
    //
    //   // pass the store to be available on the _App
    //   // on the server side
    //   // SSRStores value will reach client as serialized value
    //   appContext.ctx.SSRStore = store;
    //
    //   let appProps = {};
    //
    //   if (typeof App.getInitialProps === 'function') {
    //     appProps = await App.getInitialProps(appContext);
    //   }
    //
    //   return {
    //     ...appProps,
    //     initialState: store.getState(),
    //   };
    // }

    constructor(props) {
      super(props);
      this.store = getOrCreateStore({});
      if (!IS_SERVER) {
        window.store = this.store;
      }
    }

    static propTypes = {
      initialState: PropTypes.object.isRequired,
    };

    render() {
      return <App {...this.props} store={this.store} />;
    }
  };
};
