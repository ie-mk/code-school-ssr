import React, { useState, us } from 'react';
import Styled from '../Task.manager.styles';
import { useRouter } from 'next/router';
import FlexContainer from '../../foundation/FlexContainer';
import Button from '../../foundation/button/Button';
import ContainerBase from '../../foundation/ContainerBase';
import { canEditTask, isRegistered } from '../../../store/selectors';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AddButtton = styled.div`
  font-size: 25px;
`;

const Wrapper = styled.div`
  cursor: pointer;
`;

const DialogBox = styled.div`
  position: absolute;
  padding: 10px 20px;
  left: 200px;
  top: -100px;
  border-radius: 3px;
  z-index: 9;
  background-color: #888888;
`;

const SolutionsControl = ({
  task,
  isRegistered,
  canEditTask,
  forceRerender,
}) => {
  const router = useRouter();
  const {
    query: { stepIndex, solutionIndex, taskId },
  } = router;

  const [showDialogBox, setShowDialogBox] = useState(null);
  const [solutionName, setSolutionName] = useState('');
  const [operation, setOperation] = useState(null);
  const [solutionsToDelete, setSolutionsToDelete] = useState({});

  if (!(isRegistered || canEditTask)) return null;

  const solutions =
    task &&
    task.steps &&
    task.steps[stepIndex] &&
    task.steps[stepIndex].solutions;

  const activeSolution = solutions && solutions[solutionIndex];

  const handleNewSolutionCreation = () => {
    solutions.push({ ...activeSolution, title: solutionName });
    forceRerender(new Date().getTime());
  };

  const handleDialog = val => {
    setShowDialogBox(!showDialogBox);
    setOperation(val);
  };

  const handleDeleteCheckbox = (checked, idx) => {
    if (checked) {
      solutionsToDelete[idx] = true;
    } else {
      delete solutionsToDelete[idx];
    }
  };

  const hanldeDeletion = () => {
    if (confirm('Are you sure you want to delete these files?')) {
      Object.keys(solutionsToDelete).forEach(idx => {
        Array.isArray(solutions) && solutions.splice(idx, 1);
      });
      forceRerender(new Date().getTime());
    }
  };

  const solutionNames =
    solutions && solutions.map(({ title }, idx) => title || idx);

  return (
    <>
      <Styled.SolutionButton control={true} onClick={() => handleDialog('add')}>
        +
      </Styled.SolutionButton>
      <Styled.SolutionButton
        control={true}
        deleteSolution={true}
        onClick={() => handleDialog('delete')}
      >
        -
      </Styled.SolutionButton>
      {showDialogBox && operation === 'add' ? (
        <DialogBox onClick={e => e.stopPropagation()}>
          <header>Add new Solution</header>
          <input
            value={solutionName}
            onChange={e => setSolutionName(e.target.value)}
            type="text"
            placeholder="new Solution name..."
          />
          <FlexContainer marginTop="10px" justifyContent="flex-end">
            <Button
              onClick={() => setShowDialogBox(false)}
              padding="3px"
              backgroundColor="lightgray"
              type="secondary"
            >
              Cancel
            </Button>
            <Button
              margin="0"
              type="secondary"
              padding="3px"
              backgroundColor="lightgreen"
              onClick={handleNewSolutionCreation}
            >
              Create
            </Button>
          </FlexContainer>
        </DialogBox>
      ) : null}
      {showDialogBox && operation === 'delete' ? (
        <DialogBox onClick={e => e.stopPropagation()}>
          <header>Select solutions to delete</header>
          <ContainerBase marginTop="20px">
            {solutionNames.map((str, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  onChange={e => handleDeleteCheckbox(e.target.checked, idx)}
                  checked={solutionsToDelete[idx]}
                />{' '}
                {str}
              </div>
            ))}
          </ContainerBase>
          <FlexContainer marginTop="10px" justifyContent="flex-end">
            <Button
              onClick={() => setShowDialogBox(false)}
              padding="3px"
              backgroundColor="lightgray"
              type="secondary"
            >
              Cancel
            </Button>
            <Button
              margin="0"
              type="secondary"
              padding="3px"
              backgroundColor="lightgreen"
              onClick={hanldeDeletion}
            >
              Delete
            </Button>
          </FlexContainer>
        </DialogBox>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.data,
  canEditTask: canEditTask(state),
  isRegistered: isRegistered(state),
  loading: state.tasks.loading,
});

export default connect(mapStateToProps)(SolutionsControl);
