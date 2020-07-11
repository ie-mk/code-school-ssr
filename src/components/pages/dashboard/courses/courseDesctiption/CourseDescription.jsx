import React, { useState, memo } from 'react';
import Styled from './CourseDescription.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/pictureUploader/PictureUploader';
import Button from '../../../../foundation/button/Button';
import { spacing } from '../../../../../constants/styles';
import { getEditableCourseData } from '../../../../../store/selectors';
import { resourceActions } from '../../../../../store/actions';
import {
  LEARNING_PATH_OPTIONS,
  LEVEL,
  LEVEL_OPTIONS,
} from '../../../../../constants';

const durationarr = [
  { show: 'Set duration', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];
const durationoptions = durationarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const authorarr = [
  { show: 'Select Author', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];

const authoroptions = authorarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const categoryarr = [
  { show: 'Choose category', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];

const categoryoptions = categoryarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

let CourseDescription = ({ dispatch, editableCourseData }) => {
  const published = editableCourseData.published;

  const handlePublish = e => {
    e.stopPropagation();

    dispatch(
      resourceActions.updateCourse.request({ data: { published: !published } }),
    );
  };

  return (
    <ContainerBase
      paddingLeft="xxxl"
      paddingRight="xxxl"
      paddingBottom="xxxxxl"
    >
      <Formik
        initialValues={editableCourseData}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          // debugger;
          dispatch(resourceActions.updateCourse.request({ data: values }));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="title"
                type="text"
                label="Course Title"
                width="65%"
              />
              <AdminUploadImage width="30%" label="Thumbnail" />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminDropDown
                classNameString="select"
                name="learningPath"
                label="Learning path"
                component="select"
                width="30%"
                placeholder="Choose a learning path"
                options={LEARNING_PATH_OPTIONS}
              />
              <AdminDropDown
                classNameString="select"
                name="level"
                label="Level"
                component="select"
                width="30%"
                placeholder="Choose Level"
                options={LEVEL_OPTIONS}
              />
              <AdminInput
                name="duration"
                type="text"
                label="Duration"
                width="30%"
                placeholder="...hours, days, weeks"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminInput
                name="numberOfChapters"
                type="text"
                label="Number of chapters"
                width="30%"
              />
              <AdminInput
                name="studentRating"
                type="text"
                label="Student Rating"
                width="30%"
              />
              <AdminInput
                name="published"
                type="checkbox"
                label="Published"
                width="10%"
                disabled={true}
              />
              <Button
                onClick={handlePublish}
                type="button"
                size="sm"
                margin="45px 40px 0 0"
              >
                {published ? 'Unpublish' : 'Publish'}
              </Button>
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="whatWillLearn"
                rows="5"
                cols="110"
                component="textarea"
                label="What you will learn ?"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="prerequisites"
                rows="5"
                cols="110"
                component="textarea"
                label="Pre-requisites ?"
                width="100%"
              />
            </Styled.InputRow>
            <ContainerBase
              display="flex"
              justifyContent="flex-end"
              marginTop={spacing.md}
            >
              <Button
                type="primary"
                fontSize="18px"
                borderRadius="sm"
                width="300px"
                submit="true"
                onClick={handleSubmit}
              >
                Update Description
              </Button>
            </ContainerBase>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  title: '',
  file: '',
  difficulty: '',
  duration: '',
  numberOfChapters: '',
  studentRating: '',
  author: '',
  learningPath: '',
  whatWillLearn: '',
  prerequisites: '',
};

const mapStateToProps = state => ({
  editableCourseData: { ...initialFormValues, ...getEditableCourseData(state) },
});

export default connect(mapStateToProps)(CourseDescription);
