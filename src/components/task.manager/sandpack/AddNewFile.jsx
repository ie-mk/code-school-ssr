import React, { useState } from 'react';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import styled from 'styled-components';
import FlexContainer from '../../foundation/FlexContainer';
import Button from '../../foundation/button/Button';

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

const AddNewFile = () => {
  const [showDialogBox, setShowDialogBox] = useState(null);
  const [fileName, setFilename] = useState('');

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
            >
              Create
            </Button>
          </FlexContainer>
        </DialogBox>
      ) : null}
    </Wrapper>
  );
};

export default AddNewFile;
