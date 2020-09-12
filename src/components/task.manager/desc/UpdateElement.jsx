import Styled from './Desc.styles';
import React from 'react';
import { Field, Formik } from 'formik';
import FlexContainer from '../../foundation/FlexContainer';

const UpdateElement = ({
  setShowUpdateElementDialog,
  topParent,
  elementAccessPath,
  setRerender,
  elementValues,
}) => {
  const updateElement = ({ text, tag }) => {
    const levelsDown = elementAccessPath.length;

    debugger;

    let parent;
    let newChildren;
    let i = 0;
    let elemIndex;

    while (i < levelsDown) {
      elemIndex = elementAccessPath[i];
      // we want to navigate down the tree
      // and get parent one level up where the element is
      if (i < levelsDown - 1) {
        parent = topParent.children[elementAccessPath[i]];
      }

      if (parent && parent.children) {
        newChildren = [...parent.children];
      }

      if (i === levelsDown - 1) {
        // this is the level where we want to exec update operation
        if (newChildren) {
          newChildren.splice(elemIndex, 1, {
            type: tag,
            text,
          });
          parent.children = newChildren;
        } else {
          // this means that this is first level and we will insert on the top parent
          const newTopParentChildren = [...topParent.children];
          const editableElementChildren =
            newTopParentChildren[elemIndex].children;
          newTopParentChildren.splice(elemIndex, 1, {
            type: tag,
            text,
          });

          if (editableElementChildren) {
            newTopParentChildren[elemIndex].children = editableElementChildren;
          }

          topParent.children = newTopParentChildren;
        }
        // we want to force rerender of the component;
        setRerender(new Date().getTime());
      }
      i++;
    }
  };

  const initialValues = {
    tag: elementValues.type || '',
    text: elementValues.text || '',
  };
  console.log('-----initialValues: ', initialValues);

  return (
    <Styled.UpdateElementWrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          updateElement(values);

          setTimeout(() => {
            setSubmitting(false);
          }, 100);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.FormField
              name="tag"
              type="input"
              placeholder="enter tag..."
            />
            <Styled.FormField
              name="text"
              component="textarea"
              rows="9"
              placeholder="enter text..."
            />
            <FlexContainer padding="5px 0 0">
              <Styled.FormButton type="submit">Update</Styled.FormButton>
              <Styled.FormButton
                onClick={() => setShowUpdateElementDialog(false)}
              >
                Cancel
              </Styled.FormButton>
            </FlexContainer>
          </form>
        )}
      </Formik>
    </Styled.UpdateElementWrapper>
  );
};

export default UpdateElement;
