import React, { useEffect, useState, useCallback } from 'react';
import Split from 'react-split';
import { connect } from 'react-redux';
import { Desc } from './desc';
import { Stepnav } from './stepnav';
import { Sandpack } from './sandpack';
import './Task.manager.scss';
import { useRouter } from 'next/router';
import { layoutActions, resourceActions } from '../../store/actions';
import { canEditTask, isRegistered } from '../../store/selectors';
import SpinnerLarge from '../foundation/spinner/SpinnerLarge';
import Styled from './Task.manager.styles';
import debounce from 'lodash.debounce';

function TaskManager({ dispatch, tasks, canEditTask, loading, isRegistered }) {
  const router = useRouter();
  const {
    query: { stepIndex, solutionIndex, taskId },
  } = router;

  const [editMode, setEditMode] = useState(false);
  const [firstColumnSize, updateFirstColumnSize] = useState(20);
  const [secondColumnSize, updateSecondColumnSize] = useState(47.5);

  const solutionsMenuWidth =
    firstColumnSize &&
    secondColumnSize &&
    firstColumnSize + (1 - firstColumnSize / 100) * secondColumnSize - 0.07;

  const handleCol1Resize = useCallback(
    debounce(val => {
      updateFirstColumnSize(val);
    }, 30),
  );

  const handleCol2Resize = useCallback(
    debounce(val => {
      updateSecondColumnSize(val);
    }, 30),
  );

  console.log('----firstColumnSize: ', firstColumnSize);
  console.log('----secondColumnSize: ', secondColumnSize);

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

  let $step;

  if (task) {
    const { steps } = task;

    const step = steps[(stepIndex && Number(stepIndex)) || 0];
    const { solutions } = step;
    const solution = solutionIndex && solutions[Number(solutionIndex)];
    $step = solution || step;
  }

  const onFileChange = useCallback(
    debounce(files => {
      $step.files = files;
      console.log('files updated');
    }, 1000),
    [$step],
  );

  if (!task) return null;

  return (
    <>
      {loading ? <SpinnerLarge /> : null}
      <Split
        onDrag={e => handleCol1Resize(e[0])}
        className="task-manager"
        sizes={[20, 75]}
        gutterSize={5}
      >
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
        <Sandpack
          canEditTask={canEditTask}
          step={$step}
          onFileChange={onFileChange}
          isRegistered={isRegistered}
          updateSecondColumnSize={handleCol2Resize}
        />
      </Split>
      <Styled.SolutionsWrapper width={solutionsMenuWidth} />
    </>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks.data,
  canEditTask: canEditTask(state),
  loading: state.tasks.loading,
  isRegistered: isRegistered(state),
});

export default connect(mapStateToProps)(TaskManager);
