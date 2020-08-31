import React from 'react';
import { IS_SERVER } from '../constants';
import { getOrCreateStore } from '../store/store';
import { getUID } from '../store/selectors';
import { useRouter } from 'next/router';

const needsLoginWrapper = Component => props => {
  const router = useRouter();

  if (!IS_SERVER) {
    const state = getOrCreateStore().getState();
    const uid = getUID(state);

    if (!uid) {
      const url = '/login';
      router.push(url, url, { shallow: true });

      return null;
    }
  }
  return <Component {...props} />;
};

export default needsLoginWrapper;
