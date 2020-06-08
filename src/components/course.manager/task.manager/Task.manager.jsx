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
      <div className="top">
        <Desc desc={task.desc} />
        <CodeEditor source={step} />
      </div>
      <div className="bottom">
        <CodeOutput />
      </div>
    </Wrapper>
  );
}

TaskManager = memo(TaskManager);

export { TaskManager };
