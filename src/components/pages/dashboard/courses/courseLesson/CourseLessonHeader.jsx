import React, { useState } from 'react';
import Styled from './CourseLesson.styles';

import Button from '../../../../foundation/button/Button';
import FlexContainer from '../../../../foundation/FlexContainer';
import { spacing } from '../../../../../constants/styles';
import { resourceActions } from '../../../../../store/actions';
import { connect } from 'react-redux';

const CustomButton = props => (
  <Button
    type="action"
    fontSize="18px"
    borderRadius="sm"
    margin="0 20px 0 0"
    {...props}
  >
    {props.children}
  </Button>
);

let CourseLessonHeader = ({
  dispatch,
  courseId,
  chapterId,
  lessonId,
  idx,
  editMode,
  setEditMode,
  activeLessonId,
  setActiveLessonId,
}) => {
  const deleteLesson = () => {
    if (confirm('Are you sure you want to delete this lesson?')) {
      dispatch(
        resourceActions.deleteLesson.request({
          courseId,
          chapterId,
          lessonId,
        }),
      );
    }
  };
  const active = activeLessonId === lessonId;
  const editing = active && editMode;

  return (
    <FlexContainer
      justifyContent="space-between"
      padding={spacing.lg}
      alignItems="center"
      border={active ? '2px dashed gray' : 'inherit'}
    >
      <Styled.LessonNumber
        onClick={() => {
          setActiveLessonId(lessonId);
        }}
        editing={editing || active}
      >{`Lesson ${idx + 1}`}</Styled.LessonNumber>
      <div>
        {!editing ? (
          <>
            {!active ? (
              <CustomButton
                margin="0 20px 0 0"
                onClick={() => {
                  setActiveLessonId(lessonId);
                }}
              >
                View
              </CustomButton>
            ) : null}
            <CustomButton
              margin="0 20px 0 0"
              onClick={() => {
                setActiveLessonId(lessonId);
                setEditMode(true);
              }}
            >
              Edit
            </CustomButton>
            <CustomButton onClick={deleteLesson} margin="null">
              Delete
            </CustomButton>
          </>
        ) : null}
      </div>
    </FlexContainer>
  );
};

export default connect()(CourseLessonHeader);
