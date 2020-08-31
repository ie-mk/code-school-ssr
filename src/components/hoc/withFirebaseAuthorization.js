import React from 'react';
import { withRouter } from 'next/router';
import firebase from '../../../firebase/app';

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser) {
          this.props.router.push('sign-in');
        }
      });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
