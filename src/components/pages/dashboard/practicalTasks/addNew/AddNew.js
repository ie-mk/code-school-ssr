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
import Button from '../../../../foundation/button/Button';
import { resourceActions } from '../../../../../store/actions';

const StyledError = styled.div`
  color: red;
`;

const AddNew = ({
  editTask,
  setEdit,
  editTaskId,
  setNewAdd,
  dispatch,
  tasks,
}) => {
  const handleCancel = () => {
    setEdit(false);
    setNewAdd(false);
  };

  const task = tasks[editTaskId];

  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl">
      <Styled.RowContainer>
        {editTask ? (
          <div>
            Task Name <i className="fa fa-angle-right" aria-hidden="true" />
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
        initialValues={{ ...initialFormValues, ...task }}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            editTask
              ? resourceActions.updateTask.request({
                  docId: editTaskId,
                  data: values,
                })
              : resourceActions.createTask.request({
                  data: values,
                }),
          );
          setTimeout(() => {
            setSubmitting(false);
            setEdit(false);
          }, 400);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="title"
                type="text"
                label="Task Title"
                placeholder="Enter Task Title..."
                width="100%"
                border={true}
              />
            </Styled.InputRow>
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                width="200px"
                borderRadius="sm"
                height="45px"
                size="sm"
                submit={true}
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
  title: '',
};

const mapStateToProps = state => ({
  tasks: state.tasks.data,
});

export default connect(mapStateToProps)(AddNew);
