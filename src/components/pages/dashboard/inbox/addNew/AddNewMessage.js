import React, { useState, memo, useEffect } from 'react';
import Styled from './AddNewMessagestyles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/pictureUploader/PictureUploader';
import Button from '../../../../foundation/button/Button';
import { userActions, resourceActions } from '../../../../../store/actions';
import SearchableInput from '../../../../searchableInput/SearchableInput';
import { getAllUsersPublicInfo } from '../../../../../store/selectors';

const AddNewMessage = ({ dispatch, setNewAdd, allUsersPublicInfo }) => {
  useEffect(() => {
    dispatch(userActions.fetchAllUsersPublicInfo.request());
  }, [setNewAdd]);

  const userOptions = {};

  Object.keys(allUsersPublicInfo).forEach(key => {
    const userObject = allUsersPublicInfo[key];
    userOptions[userObject.displayName] = key;
  });

  const handleUserSearch = setFieldValue => selectedName => {
    setFieldValue('receiverId', userOptions[selectedName]);
  };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(resourceActions.createMessage.request({ data: values }));
          setTimeout(() => setSubmitting(false), 1000);
          setNewAdd(false);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit} /*onKeyDown={onKeyDown}*/>
            <Styled.InputRow>
              <SearchableInput
                label="Enter Member ID(Name / Email / Phone)"
                width="450px"
                placeholder="start typing user name"
                callback={handleUserSearch(setFieldValue)}
                options={Object.keys(userOptions)}
              />
              <Field name="receiverId" className="hidden" />
              <AdminUploadImage width="40%" label="Attachements" />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminInput
                name="subject"
                type="text"
                label="Subject"
                width="60%"
                backgroundColor="white"
                placeholder="Enter name,email or phone"
              />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="message"
                rows="10"
                cols="110"
                component="textarea"
                label="Type Your Message( Login details, portal links and guidelines)"
                width="100%"
                height="170px"
                backgroundColor="white"
                noMargin="0"
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
                Send
              </Button>

              <Button
                width="200px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => setNewAdd(false)}
              >
                Cancel
              </Button>
            </Styled.ButtonWrapper>
          </form>
        )}
      </Formik>
    </div>
  );
};

const initialFormValues = {
  receiverId: '',
  subject: '',
  message: '',
};

const mapStateToProps = state => ({
  allUsersPublicInfo: getAllUsersPublicInfo(state),
});

export default connect(mapStateToProps)(AddNewMessage);
