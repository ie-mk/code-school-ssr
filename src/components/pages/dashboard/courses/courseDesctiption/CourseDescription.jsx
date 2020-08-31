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
import PictureUploader from '../../../../foundation/pictureUploader/PictureUploader';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import ResponsiveImage from '../../../../foundation/ResponsiveImage';

const CourseDescription = ({ dispatch, editableCourseData }) => {
  const published = editableCourseData.published;

  const handlePublish = e => {
    e.stopPropagation();

    dispatch(
      resourceActions.updateCourse.request({ data: { published: !published } }),
    );
  };

  const [selectedImages, setSelectedImages] = useState(null);
  const newImageSrc = selectedImages && selectedImages.fileUrls[0];
  const imageSrc =
    newImageSrc ||
    (editableCourseData &&
      editableCourseData.images &&
      Array.isArray(editableCourseData.images) &&
      editableCourseData.images[0]);

  return (
    <ContainerBase paddingLeft="xl" paddingRight="xl" paddingBottom="xxl">
      <Formik
        initialValues={editableCourseData}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          let finalValues = { ...values };

          if (selectedImages) {
            finalValues.imagesToUpload = selectedImages.files;
          }

          dispatch(resourceActions.updateCourse.request({ data: finalValues }));
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
                width="30%"
                border={true}
              />
              <ContainerBase marginTop="md" width="30%">
                <PictureUploader setSelectedImages={setSelectedImages} />
              </ContainerBase>
              {imageSrc ? (
                <CenteredFlexContainer padding="0 20px" marginBottom="0">
                  <ResponsiveImage
                    width="100px"
                    height="100px"
                    backgroundSize="contain"
                    src={imageSrc}
                  />
                </CenteredFlexContainer>
              ) : null}
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
                border={true}
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminInput
                name="numberOfChapters"
                type="text"
                label="Number of chapters"
                width="30%"
                border={true}
              />
              <AdminInput
                name="studentRating"
                type="text"
                label="Student Rating"
                width="30%"
                border={true}
              />
              <AdminInput
                name="published"
                type="checkbox"
                label="Published"
                width="10%"
                disabled={true}
                border={true}
              />
              <Button
                onClick={handlePublish}
                type="button"
                size="sm"
                margin="26px 40px 0 0"
              >
                {published ? 'Unpublish' : 'Publish'}
              </Button>
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="whatWillLearn"
                rows="2"
                cols="110"
                component="textarea"
                label="What you will learn ?"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="prerequisites"
                rows="2"
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
