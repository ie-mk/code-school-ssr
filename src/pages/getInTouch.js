import React from 'react';
import GetInTouchPage from '../components/pages/getInTouch/GetInTouch';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import needsLoginWrapper from '../utils/needsLoginWrapper';

const GetInTouch = () => {
  return (
    <ErrorBoundary>
      <PageContent hasDefaultMarginTop={true}>
        <GetInTouchPage />
      </PageContent>
    </ErrorBoundary>
  );
};

export default needsLoginWrapper(GetInTouch);
