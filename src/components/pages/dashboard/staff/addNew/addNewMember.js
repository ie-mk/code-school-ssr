import React, { useState, memo } from 'react';
import Styled from './addNewMember.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../foundation/input/AdminInput';

import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/pictureUploader/PictureUploader';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import CustomAdminDropDown from '../../practicalTasks/customAdminDropDown/CustomAdminDropDown';
import Button from '../../../../foundation/button/Button';

let AddNewMember = ({ editTask, setEdit, setNewAdd }) => {
  const handleCancel = () => {
    setEdit(false);
    setNewAdd(false);
  };

  const rolearr = [
    { show: 'Select Role', value: '' },
    { show: 'Author', value: 'Author' },
    { show: 'Admin', value: 'Admin' },
  ];
  const roleoptions = rolearr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });
  return (
    <Styled.ModalWrapper>
      <Styled.RowContainer>
        {editTask ? (
          <Styled.Title isStrong={true}>Edit Member</Styled.Title>
        ) : (
          <Styled.Title isStrong={true}>New Member</Styled.Title>
        )}
      </Styled.RowContainer>
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
                name="courseTitle"
                type="text"
                label="Enter Member ID(Name / Email / Phone)"
                width="70%"
                backgroundColor="white"
                placeholder="Enter name,email or phone"
              />
              <AdminDropDown
                classNameString="select"
                name="role"
                label="Role"
                component="select"
                width="40%"
                placeholder="Select author"
                options={roleoptions}
                backgroundColor="white"
              />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="learn"
                rows="10"
                cols="110"
                component="textarea"
                label="Onboarding Message( Login details, portal links and guidelines)"
                width="100%"
                height="250px"
                backgroundColor="white"
              />
            </Styled.InputRow>
            <Styled.ButtonWrapper>
              {editTask ? (
                <Button
                  type="primary"
                  width="200px"
                  borderRadius="sm"
                  height="45px"
                  size="sm"
                >
                  Update
                </Button>
              ) : (
                <Button
                  type="primary"
                  width="200px"
                  borderRadius="sm"
                  height="45px"
                  size="sm"
                >
                  Assign
                </Button>
              )}
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
    </Styled.ModalWrapper>
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

export default AddNewMember;
