import React from 'react';
import { IS_SERVER } from '../constants';
import ErrorBoundary from '../components/ErrorBoundary';
import { CourseManager } from '../components';

const Login = () => {
  return !IS_SERVER ? (
    <ErrorBoundary>
      <CourseManager />
    </ErrorBoundary>
  ) : null;
};

export default Login;
