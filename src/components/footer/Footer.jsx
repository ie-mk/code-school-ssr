import React from 'react';
import Styled from './Footer.styles';
import { Logo } from '../foundation';
import ContainerBase from '../foundation/ContainerBase';
import { background } from '../../constants/styles';

const Footer = () => {
  return (
    <ContainerBase padding="80px 200px" background={background.footer}>
      <Styled.Wrapper>
        <Styled.Column>
          <Logo imgSrc="/logo/logo-footer-with-name.png" width="210px" />
          <Styled.Address>
            <Styled.Line>Office Address:</Styled.Line>
            <Styled.Line>Building Number</Styled.Line>
            <Styled.Line>Street:</Styled.Line>
            <Styled.Line>Postcode:</Styled.Line>
          </Styled.Address>
          <Styled.Social>FB, twitter</Styled.Social>
        </Styled.Column>
        <Styled.Column>
          <Styled.Header>POLICY</Styled.Header>
          <Styled.Line>Terms of Usage</Styled.Line>
          <Styled.Line>Privacy Policy</Styled.Line>
        </Styled.Column>
        <Styled.Column>
          <Styled.Header>SUPPORT</Styled.Header>
          <Styled.Line>Contact us</Styled.Line>
          <Styled.Line>Help Center</Styled.Line>
          <Styled.Line>FAQ</Styled.Line>
        </Styled.Column>
        <Styled.Column>
          <Styled.Header>SUBSCRIBE</Styled.Header>
        </Styled.Column>
      </Styled.Wrapper>
    </ContainerBase>
  );
};

export default Footer;
