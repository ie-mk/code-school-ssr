import React from 'react';
import { IS_SERVER } from '../constants';
import { getOrCreateStore } from '../store/store';
import { getUID } from '../store/selectors';
import Router from 'next/router';
import { isStaff } from '../store/selectors';

const needsAdmin = Component => () => {
  if (!IS_SERVER) {
    const state = getOrCreateStore().getState();
    const authorized = isStaff(state);

    if (!authorized) {
      const url = '/login';
      Router.push(url, url, { shallow: true });

      return null;
    }
  }
  return <Component />;
};

export default needsAdmin;
