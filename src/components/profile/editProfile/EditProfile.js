import React, { useState, useRef } from 'react';
import Styled from './EditProfile.styles';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import HeroTitle from '../../foundation/typography/HeroTitle';
import Grid from '../../foundation/Grid';
import { spacing } from '../../../constants/styles';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../foundation/input/AdminInput';
import ContainerBase from '../../foundation/ContainerBase';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import EditAccount from './editAccountDetails/EditAccountDetails';
import BillingDetails from './billingDetails/BillingDetails';
import { userActions } from '../../../store/actions';
import SpinnerLarge from '../../foundation/spinner/SpinnerLarge';
import needsLoginWrapper from '../../../utils/needsLoginWrapper';
import {
  getUserProfileSelector,
  getUserSelector,
} from '../../../store/selectors';

const EditProfile = ({
  user: { profile, loadingPicture: loading },
  dispatch,
  userProfile,
}) => {
  const fileInputRef = useRef(null);
  const profileImage = profile && (profile.profileImage || profile.photoURL);
  const uid = profile.uid;

  console.log(loading);

  const handleChange = event => {
    if (typeof event.target.files[0] === 'undefined') {
      return;
    }
    dispatch(
      userActions.updateUserProfilePicture.request({
        image: event.target.files[0],
        uid,
      }),
    );
  };

  return (
    <CenteredFlexContainer>
      {loading ? <SpinnerLarge /> : null}
      <HeroTitle
        margin="30px 0 100px 0"
        mobileMargin="15px 0 50px 0"
        fontWeight="700"
        text="Edit Your Profile"
      />
      <CenteredFlexContainer>
        <Formik
          initialValues={{ ...userProfile }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            dispatch(userActions.updateUserProfile.request(values));
            setTimeout(() => setSubmitting(false), 1000);
          }}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                columns="1fr"
                marginBottom
                mediaConfig={{
                  aboveTabletLarge: {
                    'grid-template-columns': '1fr 1fr',
                  },
                  belowTabletLarge: {
                    'grid-gap': spacing.xl,
                  },
                }}
                gridGap={spacing.xxxxl}
              >
                <Styled.ProfileWrapper>
                  <div>
                    {' '}
                    <Styled.Image src={profileImage} />
                  </div>
                  <div>
                    <input
                      className="hidden"
                      type="file"
                      onChange={event => handleChange(event)}
                      ref={fileInputRef}
                    />
                    <Button
                      type="primary"
                      width="250px"
                      margin="55px 0 0 0"
                      height="45px"
                      marginMobile="30px 0 0 0"
                      size="sm"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Upload Photo
                    </Button>
                  </div>
                </Styled.ProfileWrapper>
                <div>
                  <AdminInput
                    name="fullName"
                    type="text"
                    label="Full Name"
                    color="white"
                    backgroundColor="#293150"
                    width="600px"
                    inputColor="white"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                    noMargin="0"
                  />
                  <AdminInput
                    name="profileTitle"
                    type="text"
                    label="Profile Title ( optional )"
                    backgroundColor="#293150"
                    color="white"
                    inputColor="white"
                    width="600px"
                    mobileWidth="300px"
                    fontSize="h4"
                    height="50px"
                  />
                  <AdminInput
                    name="website"
                    type="text"
                    label="Website ( optional )"
                    backgroundColor="#293150"
                    color="white"
                    width="600px"
                    inputColor="white"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                  <AdminInput
                    name="linkdinProfile"
                    type="text"
                    label="Linkdin Profile ( optional )"
                    backgroundColor="#293150"
                    color="white"
                    width="600px"
                    inputColor="white"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                  <AdminInput
                    name="facebookProfile"
                    type="text"
                    label="Facebook Profile ( optional )"
                    backgroundColor="#293150"
                    color="white"
                    width="600px"
                    inputColor="white"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                  <AdminInput
                    name="instagramProfile"
                    type="text"
                    label="Instagram Profile ( optional )"
                    backgroundColor="#293150"
                    color="white"
                    inputColor="white"
                    width="600px"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                  <AdminInput
                    name="twitterProfile"
                    type="text"
                    label="Twitter Profile ( optional )"
                    backgroundColor="#293150"
                    color="white"
                    width="600px"
                    inputColor="white"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                </div>
              </Grid>
              <EditAccount />
              <BillingDetails />

              <CenteredFlexContainer>
                <Styled.RowContainer>
                  <Button
                    type="primary"
                    width="250px"
                    margin="0 40px 0 0"
                    height="45px"
                    marginMobile="35px 0 0 0"
                    size="sm"
                  >
                    UPDATE MY PROFILE
                  </Button>
                  <Button
                    type="secondary"
                    width="250px"
                    margin="0 0 0 0"
                    height="45px"
                    marginMobile="32px 0 0 0"
                    size="sm"
                  >
                    CANCEL
                  </Button>
                </Styled.RowContainer>
              </CenteredFlexContainer>
            </form>
          )}
        </Formik>
      </CenteredFlexContainer>
    </CenteredFlexContainer>
  );
};
const initialFormValues = {
  fullName: '',
  profileTitle: '',
  website: '',
  linkdinProfile: '',
  facebookProfile: '',
  instagramProfile: '',
  twitterProfile: '',
  addressLine01: '',
  addressLine02: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  email: '',
  password: '',
  countryCode: '',
  mobileNo: '',
};

const mapStateToProps = state => ({
  userProfile: { ...initialFormValues, ...getUserProfileSelector(state) },
  user: getUserSelector(state),
});
export default connect(mapStateToProps)(needsLoginWrapper(EditProfile));
