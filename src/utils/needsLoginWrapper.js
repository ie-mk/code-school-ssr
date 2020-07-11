import React from 'react';
import { IS_SERVER } from '../constants';
import { getOrCreateStore } from '../store/store';
import { getUID } from '../store/selectors';
import Router from 'next/router';

const needsLoginWrapper = Component => props => {
  if (!IS_SERVER) {
    const state = getOrCreateStore().getState();
    const uid = getUID(state);

    if (!uid) {
      const url = '/login';
      Router.push(url, url, { shallow: true });

      return null;
    }
  }
  return <Component {...props} />;
};

export default needsLoginWrapper;
