import React, { useState, memo } from 'react';
import Styled from './AddNew.styles';
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
import { userActions, resourceActions } from '../../../../../store/actions';
const StyledError = styled.div`
  color: red;
`;

const categoryarr = [
  { show: 'Choose category', value: '' },
  { show: 'development', value: 'development' },
  { show: 'testing', value: 'testing' },
];
const categoryoptions = categoryarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const skillarr = [
  { show: 'Choose Skill', value: '' },
  { show: 'Html', value: 'Html' },
  { show: 'Php', value: 'Php' },
];
const skilloptions = skillarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const levelarr = [
  { show: 'Choose Level', value: '' },
  { show: 'Beginner', value: 'Beginner' },
  { show: 'Intermidate', value: 'Intermidate' },
  { show: 'Advance', value: 'Advance' },
];
const leveloptions = levelarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});
const AddNew = ({ editTask, setEdit, setNewAdd, dispatch }) => {
  const handleCancel = () => {
    setEdit(false);
    setNewAdd(false);
  };

  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl">
      <Styled.RowContainer>
        {editTask ? (
          <div>
            Task Name <i class="fa fa-angle-right" aria-hidden="true" />
            <Styled.Title isStrong={true} textDecor={true}>
              EdIT
            </Styled.Title>
          </div>
        ) : (
          <Styled.Title isStrong={true} textDecor={true}>
            Add New Task
          </Styled.Title>
        )}
      </Styled.RowContainer>

      <Formik
        initialValues={initialFormValues}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            resourceActions.createTask.request({
              data: values,
            }),
          );
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="taskName"
                type="text"
                label="Task Name"
                placeholder="Enter course title"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminDropDown
                classNameString="select"
                name="category"
                label="Category"
                component="select"
                dropdownWidth="300px"
                placeholder="Choose Category"
                options={categoryoptions}
              />
              <AdminDropDown
                classNameString="select"
                name="Skill"
                label="Skill"
                component="select"
                dropdownWidth="300px"
                placeholder="Choose Skill"
                options={skilloptions}
              />
              <AdminDropDown
                classNameString="select"
                name="level"
                label="Level"
                component="select"
                dropdownWidth="300px"
                placeholder="Choose Level"
                options={leveloptions}
              />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="taskBrief"
                rows="10"
                cols="110"
                component="textarea"
                label="Task Brief"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="taskChallenge"
                rows="10"
                cols="110"
                component="textarea"
                label="Task Challenge"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminInput
                name="taskLink"
                type="text"
                label="Task Link"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                width="200px"
                borderRadius="sm"
                height="45px"
                size="sm"
              >
                Save
              </Button>
              <Button
                width="200px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            </Styled.ButtonWrapper>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  taskName: '',
  level: '',
  skill: '',
  category: '',
  taskBrief: '',
  taskChallenge: '',
  taskLink: '',
};

export default connect()(AddNew);
