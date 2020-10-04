import React, { useState } from 'react';
import { connect } from 'react-redux';
import ContainerBase from '../../foundation/ContainerBase';
import styled from 'styled-components';
import FlexContainer from '../../foundation/FlexContainer';
import Button from '../../foundation/button/Button';
import { canEditTask, isRegistered } from '../../../store/selectors';

const AddButtton = styled.div`
  font-size: 25px;
`;

const Wrapper = styled.div`
  cursor: pointer;
`;

const DialogBox = styled.div`
  position: absolute;
  padding: 10px 20px;
  left: 20%;
  top: 100px;
  border-radius: 3px;
  z-index: 9;
  background-color: #888888;
`;

const AddNewFile = ({
  isRegistered,
  step,
  forceRerender,
  canEditTask,
  saveTask,
}) => {
  const [showDialogBox, setShowDialogBox] = useState(null);
  const [fileName, setFilename] = useState('');
  const [operation, setOperation] = useState(null);
  const [filesToDelete, setFilesToDelete] = useState({});

  if (!(isRegistered || canEditTask)) return null;

  const files = step.files;

  const handleNewFileCreation = () => {
    const str = `/${fileName}`;

    if (files.str) {
      confirm('This file name exists already');
      return;
    }
    files[str] = {
      code: '',
    };

    saveTask();
    forceRerender(new Date().getTime());
  };

  const handleDialog = val => {
    setShowDialogBox(!showDialogBox);
    setOperation(val);
  };

  const handleDeleteCheckbox = (checked, str) => {
    if (checked) {
      filesToDelete[str] = true;
    } else {
      delete filesToDelete[str];
    }
  };

  const hanldeDeletion = () => {
    if (confirm('Are you sure you want to delete these files?')) {
      Object.keys(filesToDelete).forEach(str => {
        delete files[str];
      });
      saveTask();
      forceRerender(new Date().getTime());
    }
  };

  const fileNames = files && Object.keys(files);

  return (
    <Wrapper>
      <FlexContainer margin="0" padding="8px">
        <AddButtton onClick={() => handleDialog('add')}>+</AddButtton>
        <AddButtton onClick={() => handleDialog('delete')}>-</AddButtton>
      </FlexContainer>
      {showDialogBox && operation === 'add' ? (
        <DialogBox onClick={e => e.stopPropagation()}>
          <header>Add new file</header>
          <input
            value={fileName}
            onChange={e => setFilename(e.target.value)}
            type="text"
            placeholder="Enter new file name..."
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
              onClick={handleNewFileCreation}
            >
              Create
            </Button>
          </FlexContainer>
        </DialogBox>
      ) : null}
      {showDialogBox && operation === 'delete' ? (
        <DialogBox onClick={e => e.stopPropagation()}>
          <header>Select files to delete</header>
          <ContainerBase marginTop="20px">
            {fileNames.map(str => (
              <div className={`${str === '/index.js' ? 'hidden' : ''}`}>
                <input
                  type="checkbox"
                  onChange={e => handleDeleteCheckbox(e.target.checked, str)}
                  checked={filesToDelete[str]}
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
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.data,
  canEditTask: canEditTask(state),
  isRegistered: isRegistered(state),
  loading: state.tasks.loading,
});

export default connect(mapStateToProps)(AddNewFile);
