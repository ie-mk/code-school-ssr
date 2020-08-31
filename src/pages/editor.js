import React from 'react';
import { IS_SERVER } from '../constants';
import ErrorBoundary from '../components/ErrorBoundary';
import dynamic from 'next/dynamic';

const TaskManager = dynamic(
  () => import('../components/task.manager/Task.manager.jsx'),
  {
    ssr: false,
  },
);

console.log('IS_SERVER', IS_SERVER);

const Editor = () => {
  console.log('Editor -> TaskManager', TaskManager);

  if (!TaskManager) return null;

  return !IS_SERVER ? (
    <ErrorBoundary>
      <TaskManager />
    </ErrorBoundary>
  ) : null;
};

export default Editor;
