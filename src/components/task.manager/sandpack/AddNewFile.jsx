import React, { useState } from 'react';
import { connect } from 'react-redux';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import styled from 'styled-components';
import FlexContainer from '../../foundation/FlexContainer';
import Button from '../../foundation/button/Button';
import { canEditTask } from '../../../store/selectors';

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

const AddNewFile = ({ tasks }) => {
  const [showDialogBox, setShowDialogBox] = useState(null);
  const [fileName, setFilename] = useState('');

  const handleNewFileCreation = () => {};

  return (
    <Wrapper onClick={() => setShowDialogBox(!showDialogBox)}>
      <CenteredFlexContainer margin="0" padding="8px">
        <AddButtton>+</AddButtton>
      </CenteredFlexContainer>
      {showDialogBox ? (
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
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.data,
  canEditTask: canEditTask(state),
  loading: state.tasks.loading,
});

export default connect(mapStateToProps)(AddNewFile);
