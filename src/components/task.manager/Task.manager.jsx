import React, { useEffect, useState } from 'react';
import Split from 'react-split';
import { connect } from 'react-redux';
import { Desc } from './desc';
import { Stepnav } from './stepnav';
import { Sandpack } from './sandpack';
import './Task.manager.scss';
import { useRouter } from 'next/router';
import { resourceActions } from '../../store/actions';
import { canEditTask } from '../../store/selectors';
import SpinnerLarge from '../foundation/spinner/SpinnerLarge';

function TaskManager({ dispatch, onFileChange, tasks, canEditTask, loading }) {
  const router = useRouter();
  const {
    query: { stepIndex, solutionIndex, taskId },
  } = router;

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(resourceActions.fetchTask.request(taskId));
  }, [taskId]);

  const task =
    tasks &&
    tasks[taskId] &&
    tasks[taskId].body &&
    JSON.parse(tasks[taskId].body);

  const saveTask = () => {
    dispatch(
      resourceActions.updateTask.request({
        docId: taskId,
        data: {
          body: JSON.stringify(task),
        },
      }),
    );
  };

  if (!task) return null;

  const { steps } = task;

  const step = steps[(stepIndex && Number(stepIndex)) || 0];
  const { solutions } = step;
  const solution = solutionIndex && solutions[Number(solutionIndex)];
  const $step = solution || step;

  return (
    <>
      {loading ? <SpinnerLarge /> : null}
      <Split className="task-manager" sizes={[30, 70]} gutterSize={5}>
        <div className="task-manager-left">
          <Stepnav task={task} editMode={editMode} />
          <Desc
            step={$step}
            canEditTask={canEditTask}
            setEditMode={setEditMode}
            editMode={editMode}
            saveTask={saveTask}
          />
        </div>
        <Sandpack step={$step} onFileChange={onFileChange} />
      </Split>
    </>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks.data,
  canEditTask: canEditTask(state),
  loading: state.tasks.loading,
});

export default connect(mapStateToProps)(TaskManager);
