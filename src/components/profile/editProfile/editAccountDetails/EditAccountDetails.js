import React, { useState, useRef } from 'react';
import Styled from './EditAccountDetails.styles';
import HeroTitle from '../../../foundation/typography/HeroTitle';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../foundation/input/AdminInput';

import Button from '../../../foundation/button/Button';
import { connect } from 'react-redux';
import Text24 from '../../../foundation/typography/Text24';

const CustomText24 = props => (
  <Text24
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 7px 0',
      },
    }}
    {...props}
  />
);
const EditAccountDetails = () => {
  return (
    <>
      <HeroTitle
        margin="125px 0 46px 0"
        mobileMargin="60px 0 23px 0"
        fontWeight="700"
        text="Account Details"
      />
      <CustomText24
        margin="0 0 65px 0"
        text="Your account information is used to log in and for password recovery"
      />

      <Formik
        initialValues={{ ...initialFormValues }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        <form>
          <Styled.RowContainer>
            <AdminInput
              name="email"
              type="text"
              label="Email"
              color="white"
              backgroundColor="#293150"
              width="600px"
              mobileWidth="300px"
              height="50px"
              fontSize="h4"
              noMargin="0"
            />
            <Button
              type="primary"
              width="250px"
              margin="30px 0 0 36px"
              height="45px"
              marginMobile="26px 0 0 0"
              size="sm"
            >
              Change Email
            </Button>
          </Styled.RowContainer>
          <Styled.RowContainer>
            <AdminInput
              name="password"
              type="text"
              label="Password"
              backgroundColor="#293150"
              color="white"
              width="600px"
              mobileWidth="300px"
              fontSize="h4"
              height="50px"
            />
            <Button
              type="primary"
              width="250px"
              margin="30px 0 0 36px"
              height="45px"
              marginMobile="0"
              size="sm"
            >
              Change Password
            </Button>
          </Styled.RowContainer>
          <Styled.RowContainer>
            <AdminInput
              name="country Code"
              type="text"
              label="Mobile"
              backgroundColor="#293150"
              color="white"
              width="138px"
              mobileWidth="65px"
              height="50px"
              fontSize="h4"
              noMargin="0"
            />
            <div style={{ margin: '12px 0 0 20px' }}>
              <AdminInput
                name="MobileNo"
                type="text"
                backgroundColor="#293150"
                color="white"
                width="413px"
                mobileWidth="215px"
                height="50px"
                fontSize="h4"
                noMargin="0"
              />
            </div>
          </Styled.RowContainer>
        </form>
      </Formik>
    </>
  );
};

const initialFormValues = {
  email: '',
  password: '',
  countrycode: '',
  mobile: '',
};
export default EditAccountDetails;
