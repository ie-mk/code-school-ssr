import React, { useState, useRef } from 'react';
import Styled from './EditAccountDetails.styles';
import HeroTitle from '../../../foundation/typography/HeroTitle';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../foundation/input/AdminInput';
import ContainerBase from '../../../foundation/ContainerBase';
import Button from '../../../foundation/button/Button';
import { connect } from 'react-redux';
import Text24 from '../../../foundation/typography/Text24';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';
import Router from 'next/router';
import Modal from '../../../modal/Modal';
import ChangePassword from './changePassword/ChangePassword';
import { spacing, fontSizeMap } from '../../../../constants/styles';

const EditAccountDetails = () => {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <>
      <CenteredFlexContainer>
        <HeroTitle
          margin="125px 0 46px 0"
          mobileMargin="60px 0 23px 0"
          fontWeight="700"
          text="Account Details"
        />
        <Text24
          margin="0 0 65px 0"
          mediaConfig={{
            belowTabletLarge: {
              margin: '0 0 7px 0',
            },
          }}
          text="Your account information is used to log in and for password recovery"
        />
      </CenteredFlexContainer>
      <Styled.RowContainer>
        <AdminInput
          name="email"
          type="text"
          label="Email"
          color="white"
          inputColor="white"
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
          type="password"
          label="Password"
          backgroundColor="#293150"
          inputColor="white"
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
          onClick={() => setChangePassword(true)}
        >
          Change Password
        </Button>
      </Styled.RowContainer>
      <Styled.RowContainer>
        <AdminInput
          name="countryCode"
          type="text"
          label="Mobile"
          backgroundColor="#293150"
          color="white"
          inputColor="white"
          width="138px"
          mobileWidth="65px"
          height="50px"
          fontSize="h4"
          noMargin="0"
        />
        <Styled.ViewWrapper>
          <AdminInput
            name="mobileNo"
            type="text"
            backgroundColor="#293150"
            color="white"
            width="413px"
            inputColor="white"
            mobileWidth="215px"
            height="50px"
            fontSize="h4"
            noMargin="0"
          />
        </Styled.ViewWrapper>
      </Styled.RowContainer>
      <ContainerBase>
        {changePassword && (
          <Modal
            styles={{
              width: '800px',
              height: 'auto',
              color: 'white',
              background:
                'transparent linear-gradient(180deg,#1A2036 0%,#191F37 51%,#191F37 100%) 0% 0% no-repeat padding-box',
            }}
            fontSize={fontSizeMap.h2}
            marginTop={spacing.xxl}
            background="transparent linear-gradient(180deg,#1A2036 0%,#191F37 51%,#191F37 100%) 0% 0% no-repeat padding-box"
            fontWeight="700"
            onClose={() => setChangePassword(false)}
            title="Change Password"
          >
            <ChangePassword setChangePassword={setChangePassword} />
          </Modal>
        )}
      </ContainerBase>
    </>
  );
};

export default EditAccountDetails;
