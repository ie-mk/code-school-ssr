import React from 'react';
import { IS_SERVER } from '../constants';
import { getOrCreateStore } from '../store/store';
import { useRouter } from 'next/router';
import { isStaff } from '../store/selectors';

const needsAdmin = Component => () => {
  const router = useRouter();
  if (!IS_SERVER) {
    const state = getOrCreateStore().getState();
    const authorized = isStaff(state);

    if (!authorized) {
      const url = '/login';
      router.push(url, url, { shallow: true });

      return null;
    }
  }
  return <Component />;
};

export default needsAdmin;
