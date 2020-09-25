import React from 'react';
import Styled from './SignUpSection.styles';
import VerticalSignUp from '../mailChimp/VerticalSignUp';

const SignUpSection = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Title>Sign up to receive our free videos!</Styled.Title>
        <VerticalSignUp horizontal={true} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default SignUpSection;
