import React, { useState, memo } from 'react';
import Styled from './CourseChapter01.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
//import { getUserProfileSelector, getUserSelector } from '../../store/selectors';
// import profileFormValidation from './profileForm.validation';
//import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';
// import { userActions } from '../../store/actions';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/pictureUploader/PictureUploader';
import Button from '../../../../foundation/button/Button';

const lessonsDataMock = {
  someId: {
    title: 'someTitle',
    desc: 'Some description',
    videoLink: 'someLink',
    task: 'link to the task',
  },
  someId2: {
    title: 'someTitle',
    desc: 'Some description',
    videoLink: 'someLink',
    task: 'link to the task',
  },
};

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  ...props
}) => {
  return (
    <Styled.Row>
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Row>
  );
};

// const arr = [1,2,3];

// const comp = arr.map((item, idx) => {

//   return(
//    <div key={idx}>
//      <FieldRadioButton
//         label="Lesson `${item}`"
//         name = "Lesson `${item}`"
//         id = "Lesson `${item}`"
//      />
//    </div>
//   )
// })

let CourseAddNew = () => {
  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl" paddingBottom="xxxxl">
      <Styled.ChapterHeader> Chapter-01</Styled.ChapterHeader>

      <Formik
        initialValues={initialFormValues}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(userActions.updateUserProfile.request(values));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="chapter01Title"
                type="text"
                label="Chapter 01 Title"
                placeholder="Enter chapter title"
                width="46.5%"
              />
              <AdminInput
                name="numberoflessons"
                type="text"
                label="Number of Lessons"
                width="46.5%"
              />
            </Styled.InputRow>
            <Styled.MidContainer>
              <Styled.AddLesson>
                {Object.keys(lessonsDataMock).map((key, idx) => {
                  const data = lessonsDataMock[key];
                  return (
                    <Styled.LessonContainer key={key}>
                      <Field
                        component={RadioButton}
                        name={data.title}
                        label={`Lesson ${idx + 1}`}
                      />
                      <Button
                        type="action"
                        fontSize="18px"
                        borderRadius="sm"
                        width="25%"
                        margin="null"
                      >
                        Edit
                      </Button>
                      <Button
                        type="action"
                        fontSize="18px"
                        borderRadius="sm"
                        width="25%"
                        margin="null"
                      >
                        Delete
                      </Button>
                    </Styled.LessonContainer>
                  );
                })}
                <Styled.AddNewWrapper>
                  <Button
                    type="primary"
                    fontSize="18px"
                    borderRadius="sm"
                    width="50%"
                  >
                    + Add Lesson
                  </Button>
                </Styled.AddNewWrapper>
              </Styled.AddLesson>
              <Styled.LessonFormContainer>
                <AdminInput
                  name="chapter01Title"
                  type="text"
                  label="Lesson Title"
                  //  placeholder="Enter chapter title"
                  width="100%"
                  backgroundColor="white"
                />
                <AdminTextArea
                  name="learn"
                  rows="5"
                  cols="10"
                  component="textarea"
                  placeholder="Lesson Breif"
                  label="Lesson Breif"
                  width="100%"
                  backgroundColor="white"
                />
                <ContainerBase flexDirection="row" display="flex">
                  <AdminInput
                    name="chapter01Title"
                    type="text"
                    label="Video Link"
                    //  placeholder="Enter chapter title"
                    backgroundColor="white"
                    width="70%"
                  />
                  <Styled.Upload marginTop="xxl">upload</Styled.Upload>
                </ContainerBase>
                <AdminInput
                  name="chapter01Title"
                  type="text"
                  label="Practice Page Link/Assignment"
                  //  placeholder="Enter chapter title"
                  backgroundColor="white"
                  width="100%"
                />
              </Styled.LessonFormContainer>
            </Styled.MidContainer>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  coursetitle: '',
  file: '',
  difficulty: '',
  duration: '',
  author: '',
  category: '',
  learningpath: '',
  NumberOfChapters: 2,
  learn: '',
  prerequisites: '',
};

export default CourseAddNew;
