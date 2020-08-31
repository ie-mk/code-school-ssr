import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import api from '../../../api/api.min';
import styled from 'styled-components';
import { userActions } from '../../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PageContent from '../../foundation/PageContent';
import media from '../../foundation/media';

const { firebase } = api;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 75px;
  ${media.belowTabletLarge`
    margin-top: 75px;
  `}
`;

class FireBaseUILoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLocalhost: window.location.hostname === 'localhost',
    };
    this.email = React.createRef();
    this.psw = React.createRef();
  }
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod:
          firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: function(authResult) {
        if (authResult.additionalUserInfo.isNewUser) {
          authResult.user.sendEmailVerification();
        }
        return false;
      },
    },
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    if (this.props.loginProviderUserData) {
      this.props.router.push('/');
      return;
    }
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(loginProviderUserData => {
        if (!loginProviderUserData) return;

        const {
          uid,
          displayName,
          photoURL,
          email,
          emailVerified,
          isAnonymous,
          phoneNumber,
          multiFactor,
          providerId,
          refreshToken,
          tenantId,
        } = loginProviderUserData;

        this.props.dispatch(
          userActions.saveUserInfoFromLoginProvider({
            uid,
            displayName,
            photoURL,
            email,
            emailVerified,
            isAnonymous,
            phoneNumber,
            multiFactor,
            providerId,
            refreshToken,
            tenantId,
          }),
        );
        this.props.router.push('/');
      });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  handleTestLogin = () => {
    const email = this.email.current.value;
    const psw = this.psw.current.value;
    firebase.auth().signInWithEmailAndPassword(email, psw);
  };

  render() {
    const { loginProviderUserData } = this.props;
    if (!loginProviderUserData) {
      return (
        <PageContent>
          <Wrapper>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
            {this.state.isLocalhost ? (
              <div className="hidden" data-test="hidden-login-form">
                <input ref={this.email} name="email" />
                <input ref={this.psw} name="password" />
                <button
                  onClick={this.handleTestLogin}
                  data-test="login-with-test-user"
                >
                  Login
                </button>
              </div>
            ) : null}
          </Wrapper>
        </PageContent>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  loginProviderUserData: state.user.loginProviderUserData,
});

export default connect(mapStateToProps)(withRouter(FireBaseUILoginPage));
