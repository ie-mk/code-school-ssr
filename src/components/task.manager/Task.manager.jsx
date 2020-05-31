import React from 'react';
import { CodeEditor } from './code.editor';
import { CodeOutput } from './code.output';
import { TaskDesc } from './task.desc';
import { Wrapper } from './Task.manager.styles';

export const TaskManager = () => {
  return (
    <Wrapper className="task-manager">
      <div className="task-manager-top">
        <TaskDesc />
        <CodeEditor />
      </div>
      <div className="task-manager-bottom">
        <CodeOutput />
      </div>
    </Wrapper>
  );
};
