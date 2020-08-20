import React from 'react';
import { IS_SERVER } from '../constants';
import ErrorBoundary from '../components/ErrorBoundary';
import { TaskManager } from '../components';

console.log('IS_SERVER', IS_SERVER);

const Editor = () => {
  console.log('IS_SERVER', IS_SERVER);

  return !IS_SERVER ? (
    <ErrorBoundary>
      <TaskManager />
    </ErrorBoundary>
  ) : null;
};

export default Editor;
