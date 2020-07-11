import React, { useState } from 'react';
import Styled from './CourseLesson.styles';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/pictureUploader/PictureUploader';
import Button from '../../../../foundation/button/Button';
import { Formik, ErrorMessage, Field } from 'formik';
import { resourceActions } from '../../../../../store/actions';
import { connect } from 'react-redux';
import FlexContainer from '../../../../foundation/FlexContainer';
import { spacing } from '../../../../../constants/styles';

const CustomButton = props => (
  <Button
    type="action"
    fontSize="18px"
    borderRadius="sm"
    margin="0 20px 0 0"
    padding="10px 30px"
    {...props}
  >
    {props.children}
  </Button>
);

const CourseLessonContent = ({
  dispatch,
  editMode,
  setEditMode,
  data,
  chapterId,
  activeLessonId,
}) => {
  const initialFormValues = {
    sequenceNr: '',
    title: '',
    descr: '',
    videoLink: '',
    assignment: '',
  };

  return (
    <Styled.LessonContent>
      <Formik
        initialValues={{ ...initialFormValues, ...data }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            resourceActions.updateLesson.request({
              chapterId,
              lessonId: activeLessonId,
              data: values,
            }),
          );

          setTimeout(() => {
            setEditMode(false);
            setSubmitting(false);
          }, 200);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.LessonFormContainer>
              <FlexContainer justifyContent="space-between">
                <AdminInput
                  name="sequenceNr"
                  type="text"
                  label="Sequence Nr"
                  width="15%"
                  backgroundColor="white"
                  disabled={!editMode}
                />
                <AdminInput
                  name="title"
                  type="text"
                  label="Lesson Title"
                  placeholder="Lesson Title"
                  width="80%"
                  backgroundColor="white"
                  disabled={!editMode}
                />
              </FlexContainer>
              <AdminInput
                name="title"
                type="text"
                label="Lesson Title"
                placeholder="Lesson Title"
                width="100%"
                backgroundColor="white"
                disabled={!editMode}
              />
              <AdminTextArea
                name="descr"
                rows="5"
                cols="10"
                component="textarea"
                placeholder="Lesson Breif"
                label="Lesson Breif"
                width="100%"
                backgroundColor="white"
                disabled={!editMode}
              />
              <ContainerBase flexDirection="row" display="flex">
                <AdminInput
                  name="videoLink"
                  type="text"
                  label="Video Link"
                  placeholder="video link"
                  backgroundColor="white"
                  width="70%"
                  disabled={!editMode}
                />
                <Styled.Upload marginTop="xxl">upload</Styled.Upload>
              </ContainerBase>
              <AdminInput
                name="assignment"
                type="text"
                label="Practice Page Link/Assignment"
                placeholder="Assignment"
                backgroundColor="white"
                width="100%"
                disabled={!editMode}
              />
              {editMode ? (
                <FlexContainer
                  justifyContent="flex-end"
                  margin={`${spacing.md} 0`}
                >
                  <CustomButton onClick={() => setEditMode(null)}>
                    Cancel
                  </CustomButton>
                  <CustomButton
                    type="primary"
                    onClick={handleSubmit}
                    margin="null"
                  >
                    Save
                  </CustomButton>
                </FlexContainer>
              ) : null}
            </Styled.LessonFormContainer>
          </form>
        )}
      </Formik>
    </Styled.LessonContent>
  );
};

export default connect()(CourseLessonContent);
