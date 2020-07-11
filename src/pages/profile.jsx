import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import UserProfile from '../components/profile/Profile';
import needsLoginWrapper from '../utils/needsLoginWrapper';

const Profile = () => {
  return (
    <ErrorBoundary>
      <PageContent hasDefaultMarginTop={true}>
        <UserProfile />
      </PageContent>
    </ErrorBoundary>
  );
};

export default needsLoginWrapper(Profile);
