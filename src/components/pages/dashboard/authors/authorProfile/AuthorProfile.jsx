import React, { useEffect } from 'react';
import Styled from './AuthorProfile.styles';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getUserPublicInfo,
} from '../../../../../store/selectors';
import FlexContainer from '../../../../foundation/FlexContainer';
import AdminInput from '../../../../foundation/input/AdminInput';
import { Formik, ErrorMessage, Field } from 'formik';
import { userActions } from '../../../../../store/actions';
import { spacing } from '../../../../../constants/styles';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import Grid from '../../../../foundation/Grid';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Button from '../../../../foundation/button/Button';
import SpinnerLarge from '../../../../foundation/spinner/SpinnerLarge';

const AuthorProfile = ({ dispatch, userProfile, publicProfile, loading }) => {
  if (!userProfile) return;

  useEffect(() => {
    dispatch(userActions.fetchUserPublicInfo.request());
  }, []);

  return (
    <Formik
      initialValues={{
        skills: '',
        about: '',
        ...{ firstName: userProfile.firstName, lastName: userProfile.lastName },
        ...publicProfile,
      }}
      enableReinitialize={true}
      //  validationSchema={profileFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        dispatch(userActions.updateUserPublicInfo.request({ data: values }));
        setTimeout(() => setSubmitting(false), 1000);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {loading ? <SpinnerLarge /> : null}
          <Styled.Wrapper>
            <CenteredFlexContainer>
              <SectionTitle noMargin={true} text="Your Author Profile" />
            </CenteredFlexContainer>
            {/*<FlexContainer width="100%" marginBottom={spacing.xl} flexWrap="wrap">*/}
            <Grid columns="1fr 1fr" gridGap={spacing.lg}>
              <AdminInput
                label="Name"
                width="100%"
                noMargin={true}
                margin="0 20px 0 0"
                name="firstName"
                disabled={true}
              />
              <AdminInput
                label="Surname"
                width="100%"
                noMargin={true}
                name="lastName"
                disabled={true}
              />
            </Grid>
            <AdminTextArea
              rows="5"
              width="100%"
              name="about"
              label="About Me"
            />
            <AdminTextArea
              rows="5"
              width="100%"
              name="skills"
              label="Skills"
              placeholder="example: HTML, CSS, ...."
            />
            <FlexContainer justifyContent="flex-end">
              <Button type="primary" submit={true} size="lg">
                Update
              </Button>
            </FlexContainer>
          </Styled.Wrapper>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = state => ({
  userProfile: getUserProfile(state),
  publicProfile: getUserPublicInfo(state),
  loading: state.user.loading,
});

export default connect(mapStateToProps)(AuthorProfile);
