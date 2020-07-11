import React, { memo } from 'react';
import { CodeEditor } from './code.editor';
import { CodeOutput } from './code.output';
import { Desc } from './desc';
import { Wrapper } from './Task.manager.styles';

function TaskManager(props) {
  const { task, stepIndex = 0 } = props;
  const step = task.steps[stepIndex];

  return (
    <Wrapper>
      <Desc desc={task.desc} />
      <CodeEditor source={step} />
      <CodeOutput />
    </Wrapper>
  );
}

TaskManager = memo(TaskManager);

export { TaskManager };
