import React from 'react';
import Courses from '../../components/pages/courses/Courses';
import ErrorBoundary from '../../components/ErrorBoundary';

const Stories = () => (
  <ErrorBoundary>
    <Courses />
  </ErrorBoundary>
);

export default Stories;
