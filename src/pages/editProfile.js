import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import EditUserProfile from '../components/profile/editProfile/EditProfile';
import needsLoginWrapper from '../utils/needsLoginWrapper';

const editProfile = () => {
  return (
    <ErrorBoundary>
      <PageContent hasDefaultMarginTop={true}>
        <EditUserProfile />
      </PageContent>
    </ErrorBoundary>
  );
};

export default needsLoginWrapper(editProfile);
