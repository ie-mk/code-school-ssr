import React, { useState } from 'react';
import Styled from './Desc.styles';
import FlexContainer from '../../foundation/FlexContainer';
import AddElement from './AddElement';

const AddNewRootElement = ({ elementAccessPath, setRerender, topParent }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <FlexContainer justifyContent="center" position="relative" marginTop="20px">
      {showForm ? (
        <AddElement
          setShowAddElementDialog={setShowForm}
          elementAccessPath={elementAccessPath}
          setRerender={setRerender}
          newElPosition="after"
          topParent={topParent}
        />
      ) : (
        <Styled.FormButton onClick={() => setShowForm(true)}>
          Add new element
        </Styled.FormButton>
      )}
    </FlexContainer>
  );
};

export default AddNewRootElement;
