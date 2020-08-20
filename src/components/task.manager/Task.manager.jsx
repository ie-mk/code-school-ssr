import React, { memo } from 'react';
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
} from 'react-smooshpack';
import 'react-smooshpack/dist/styles.css';
import { Desc } from './desc';
import { Wrapper } from './Task.manager.styles';
import mock from './mock/mock.json';

function TaskManager(props) {
  const { task = mock, stepIndex = 0 } = props;
  const step = task.steps[stepIndex];

  return (
    <Wrapper>
      <Desc desc={task.desc} />
      <SandpackProvider
        files={step.files}
        dependencies={step.dependencies}
        entry="/index.js"
      >
        <FileExplorer />
        <CodeMirror />
        <BrowserPreview />
      </SandpackProvider>
    </Wrapper>
  );
}

TaskManager = memo(TaskManager);

export { TaskManager };
