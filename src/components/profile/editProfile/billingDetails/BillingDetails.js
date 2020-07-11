import React, { useState, useRef } from 'react';
import Styled from './BillingDetails.styles';
import HeroTitle from '../../../foundation/typography/HeroTitle';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../foundation/input/AdminInput';

import Button from '../../../foundation/button/Button';
import { connect } from 'react-redux';
import Text24 from '../../../foundation/typography/Text24';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';

const BillingDetails = () => {
  return (
    <>
      <CenteredFlexContainer>
        <HeroTitle
          margin="125px 0 46px 0"
          mobileMargin="60px 0 23px 0"
          fontWeight="700"
          text="Billing Details"
        />
        <Text24
          margin="0 0 65px 0"
          mediaConfig={{
            belowTabletLarge: {
              margin: '0 0 7px 0',
            },
          }}
          text="Your address is used to prepare your invoices. Your city and country are shown on profile for networking fetures"
        />
      </CenteredFlexContainer>
      <AdminInput
        name="addressLine01"
        type="text"
        label="Address Line 01"
        color="white"
        backgroundColor="#293150"
        inputColor="white"
        width="960px"
        mobileWidth="300px"
        height="50px"
        fontSize="h4"
        noMargin="0"
      />
      <AdminInput
        name="addressLine02"
        type="text"
        label="Address Line 02"
        backgroundColor="#293150"
        color="white"
        inputColor="white"
        width="960px"
        mobileWidth="300px"
        fontSize="h4"
        height="50px"
      />
      <Styled.RowContainer>
        <AdminInput
          name="city"
          type="text"
          label="City"
          backgroundColor="#293150"
          color="white"
          inputColor="white"
          width="460px"
          mobileWidth="300px"
          height="50px"
          fontSize="h4"
          noMargin="0"
        />
        <Styled.ViewWraper>
          <AdminInput
            name="state"
            type="text"
            backgroundColor="#293150"
            label="State / Region ( optional )"
            color="white"
            inputColor="white"
            width="460px"
            mobileWidth="300px"
            height="50px"
            fontSize="h4"
          />
        </Styled.ViewWraper>
      </Styled.RowContainer>
      <Styled.RowContainer>
        <AdminInput
          name="postalCode"
          type="text"
          label="Zip/PostalCode"
          backgroundColor="#293150"
          color="white"
          inputColor="white"
          width="460px"
          mobileWidth="300px"
          height="50px"
          fontSize="h4"
          noMargin="0"
        />
        <Styled.ViewWraper>
          <AdminInput
            name="country"
            type="text"
            backgroundColor="#293150"
            label="Country"
            color="white"
            width="460px"
            inputColor="white"
            mobileWidth="300px"
            height="50px"
            fontSize="h4"
          />
        </Styled.ViewWraper>
      </Styled.RowContainer>
    </>
  );
};

export default BillingDetails;
