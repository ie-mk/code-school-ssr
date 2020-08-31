import React, { useEffect } from 'react';
import { BrowserRouter, useHistory, useLocation } from 'react-router-dom';
import Split from 'react-split';
import { useSearchParams } from './utils';
import { Desc } from './desc';
import { Stepnav } from './stepnav';
import { Sandpack } from './sandpack';
import './Task.manager.scss';

function TaskManager(props) {
  const history = useHistory();
  const location = useLocation();
  const params = useSearchParams(location.search, defaultParams);
  const stepParam = params.get('step');
  const solutionParam = params.get('solution');
  const { task, onFileChange } = props;
  const { steps } = task;
  const step = steps[stepParam];
  const { solutions } = step;
  const solution = solutions[solutionParam];
  const $step = solution || step;

  useEffect(pushParams, [params]);

  function pushParams() {
    history.push(params.toString());
  }

  return (
    <Split className="task-manager" sizes={[20, 80]} gutterSize={5}>
      <div className="task-manager-left">
        <Stepnav params={params} task={task} />
        <Desc step={$step} />
      </div>
      <Sandpack step={$step} onFileChange={onFileChange} />
    </Split>
  );
}

var defaultParams = {
  step: 0,
};

function WithRouting(props) {
  return (
    <BrowserRouter>
      <TaskManager {...props} />
    </BrowserRouter>
  );
}

export { WithRouting as TaskManager };
