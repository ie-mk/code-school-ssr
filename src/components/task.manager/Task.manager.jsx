import React from 'react';
import Split from 'react-split';
import { Desc } from './desc';
import { Stepnav } from './stepnav';
import { Sandpack } from './sandpack';
import './Task.manager.scss';
import { useRouter } from 'next/router';

function TaskManager(props) {
  const router = useRouter();
  const {
    query: { stepIndex, solutionIndex },
  } = router;

  const { task, onFileChange } = props;
  const { steps } = task;

  const step = steps[(stepIndex && Number(stepIndex)) || 0];
  const { solutions } = step;
  const solution = solutionIndex && solutions[Number(solutionIndex)];
  const $step = solution || step;

  return (
    <Split className="task-manager" sizes={[20, 80]} gutterSize={5}>
      <div className="task-manager-left">
        <Stepnav task={task} />
        <Desc step={$step} />
      </div>
      <Sandpack step={$step} onFileChange={onFileChange} />
    </Split>
  );
}

export default TaskManager;
