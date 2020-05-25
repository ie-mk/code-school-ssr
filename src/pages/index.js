import React from 'react';
import Front from '../components/pages/front/Front';
import ErrorBoundary from '../components/ErrorBoundary';

const Index = () => {
  return (
    <div data-test="landing-page">
      <ErrorBoundary>
        <Front />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
