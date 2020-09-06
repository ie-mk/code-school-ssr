import Styled from './Desc.styles';
import React from 'react';
import { Field, Formik } from 'formik';
import FlexContainer from '../../foundation/FlexContainer';

const AddElement = ({
  setShowAddElementDialog,
  topParent,
  elementAccessPath,
  setRerender,
  newElPosition,
}) => {
  const addElementHandler = ({ tag, text }) => {
    const levelsDown = elementAccessPath.length;

    let parent;
    let newChildren;
    let i = 0;

    let newElemIndex =
      newElPosition === 'after'
        ? elementAccessPath[i] + 1
        : elementAccessPath[i];

    while (i < levelsDown) {
      // we want to navigate down the tree
      // and get parent one level up where the element is
      if (i < levelsDown - 1) {
        parent = topParent.children[elementAccessPath[i]];
        if (parent.children) {
          newChildren = [...parent.children];
        }
      } else {
        // this is the level where we want to exec deletion operation
        if (newChildren) {
          newChildren.splice(newElemIndex, 0, {
            type: tag,
            text,
          });
          parent.children = newChildren;
        } else {
          // this means that this is first level and we delete on the top parent
          const newTopParentChildren = [...topParent.children];
          newTopParentChildren.splice(newElemIndex, 0, {
            type: tag,
            text,
          });

          topParent.children = newTopParentChildren;
        }
        // we want to force rerender of the component;
        setRerender(new Date().getTime());
      }
      i++;
    }
  };

  const initialValues = {
    tag: 'p',
    text: '',
  };

  return (
    <Styled.AddElementWrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          addElementHandler(values);

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
              type="input"
              placeholder="enter text..."
            />
            <FlexContainer padding="5px 0 0">
              <Styled.FormButton type="submit">Add</Styled.FormButton>
              <Styled.FormButton onClick={() => setShowAddElementDialog(false)}>
                Cancel
              </Styled.FormButton>
            </FlexContainer>
          </form>
        )}
      </Formik>
    </Styled.AddElementWrapper>
  );
};

export default AddElement;
