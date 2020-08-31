import React from 'react';
import PageContent from '../components/foundation/PageContent';

import ErrorBoundary from '../components/ErrorBoundary';
import needsLoginWrapper from '../utils/needsLoginWrapper';

const LiveStreaming = () => (
  <ErrorBoundary>
    <PageContent hasDefaultMarginTop={true}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/live_stream?channel=UCV0_zxJk3vlAt7INWhEMxIg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </PageContent>
  </ErrorBoundary>
);

export default LiveStreaming;
