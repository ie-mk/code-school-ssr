import React, { useEffect } from 'react';
import Split from 'react-split';
import { connect } from 'react-redux';
import { Desc } from './desc';
import { Stepnav } from './stepnav';
import { Sandpack } from './sandpack';
import './Task.manager.scss';
import { useRouter } from 'next/router';
import { resourceActions } from '../../store/actions';

function TaskManager({ dispatch, onFileChange, tasks }) {
  const router = useRouter();
  const {
    query: { stepIndex, solutionIndex, taskId },
  } = router;

  useEffect(() => {
    dispatch(resourceActions.fetchTask.request(taskId));
  }, [taskId]);

  const task =
    tasks &&
    tasks[taskId] &&
    tasks[taskId].body &&
    JSON.parse(tasks[taskId].body);

  if (!task) return null;

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

const mapStateToProps = state => ({
  tasks: state.tasks.data,
});

export default connect(mapStateToProps)(TaskManager);
