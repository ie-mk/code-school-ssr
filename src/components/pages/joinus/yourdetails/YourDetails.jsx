import React, { useEffect } from 'react';
import ContainerBase from '../../../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../../../foundation/button/Button';
import AdminInput from '../../../foundation/input/AdminInput';
import CheckBoxWithText from '../../../foundation/checkboxwithtext/CheckBoxWithText';
import FlexContainer from '../../../foundation/FlexContainer';
import { Formik, ErrorMessage, Field } from 'formik';
import SectionTitle from '../../../foundation/typography/SectionTitle';
import { fontSizeMap, spacing } from '../../../../constants/styles';
import Styled from './YourDetails.styles';

const YourDetails = () => {
  return (
    <ContainerBase
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginBottom="xxxl"
    >
      <SectionTitle text="Tell Us About Your Details" />
      <Formik
        initialValues={{ ...initialFormValues }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        <form>
          <Styled.Wrapper>
            <AdminInput
              name="name"
              type="text"
              label="Name"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
            <AdminInput
              name="email"
              type="text"
              label="Email"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
            <AdminInput
              name="mobile"
              type="text"
              label="Mobile"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
          </Styled.Wrapper>

          <ContainerBase display="flex" flexDirection="row" marginTop="xxxls">
            <Styled.CheckBox type="checkbox" />
            <Styled.CheckBoxLabel>
              I accept the
              <Styled.CheckBoxLinkLabel>terms of use</Styled.CheckBoxLinkLabel>
            </Styled.CheckBoxLabel>
          </ContainerBase>
          <Styled.ButtonWrapper>
            <Button type="primary" size="sm" padding="lg">
              Next
            </Button>
          </Styled.ButtonWrapper>
        </form>
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  name: '',
  email: '',
  mobile: '',
};
export default YourDetails;
