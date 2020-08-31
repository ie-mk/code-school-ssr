import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '../components/ErrorBoundary';
import mock from '../components/task.manager/mock/mock.json';

const TaskManager = dynamic(
  () => import('../components/task.manager/Task.manager.jsx'),
  {
    ssr: false,
  },
);

const Editor = () => {
  if (!TaskManager) return null;

  return (
    <ErrorBoundary>
      <TaskManager task={mock} />
    </ErrorBoundary>
  );
};

export default Editor;
