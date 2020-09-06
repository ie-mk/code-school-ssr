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
  const addElementAfter = ({ tag, text }) => {
    const levelsDown = elementAccessPath.length;

    let parent;
    let newChildren;
    let i = 0;

    let newElemIndex = elementAccessPath[i] + 1;

    while (i < levelsDown) {
      // we want to navigate down the tree
      // and get parent one level up where the element is
      if (i < levelsDown - 1) {
        parent = topParent.children[elementAccessPath[i]];
        if (parent.children) {
          newChildren = [...parent.children];
        }
      } else {
        // this is the level where we want to exec insertion operation
        if (newChildren) {
          newChildren.splice(newElemIndex, 0, {
            type: tag,
            text,
          });
          parent.children = newChildren;
        } else {
          // this means that this is first level and we will insert on the top parent
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

  const addElementAsChild = ({ tag, text }) => {
    const levelsDown = elementAccessPath.length;

    let parent;
    let newChildren;
    let i = 0;

    while (i < levelsDown) {
      // we want to navigate down the tree
      // and get parent one level up where the element is
      if (i < levelsDown - 1) {
        parent = topParent.children[elementAccessPath[i]];
        if (parent.children) {
          newChildren = [...parent.children];
        }
      } else {
        // this is the level where we want to exec insertion operation
        if (parent) {
          if (newChildren) {
            newChildren.push({
              type: tag,
              text,
            });
            parent.children = newChildren;
          } else {
            newChildren = [
              {
                type: tag,
                text,
              },
            ];

            parent.children = newChildren;
          }
        } else {
          // this means that we are on the 1st level
          const topParentChildren = [...topParent.children];
          const elementWhereWillInsertChild =
            topParentChildren[elementAccessPath[0]];
          if (elementWhereWillInsertChild.children) {
            elementWhereWillInsertChild.children.push({ type: tag, text });
          } else {
            elementWhereWillInsertChild.children = [{ type: tag, text }];
          }

          topParent.children = topParentChildren;
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

          newElPosition === 'after' && addElementAfter(values);
          newElPosition === 'asChild' && addElementAsChild(values);

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
