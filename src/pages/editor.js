import React from 'react';
import { IS_SERVER } from '../constants';
import ErrorBoundary from '../components/ErrorBoundary';
import CodeEditor from '../components/codeEditor/CodeEditor';

const Login = () => {
  return !IS_SERVER ? (
    <ErrorBoundary>
      <CodeEditor />
    </ErrorBoundary>
  ) : null;
};

export default Login;
