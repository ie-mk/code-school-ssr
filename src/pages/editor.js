import React from 'react';
import { IS_SERVER } from '../constants';
import ErrorBoundary from '../components/ErrorBoundary';
import { TaskManager } from '../components';

const Login = () => {
  return !IS_SERVER ? (
    <ErrorBoundary>
      <TaskManager />
    </ErrorBoundary>
  ) : null;
};

export default Login;
