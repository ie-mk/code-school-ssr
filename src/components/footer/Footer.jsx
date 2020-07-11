import React from 'react';
import Styled from './Footer.styles';
import { Logo } from '../foundation';
import ContainerBase from '../foundation/ContainerBase';
import { background, spacing } from '../../constants/styles';
import Grid from '../foundation/Grid';

const Footer = () => {
  return (
    <ContainerBase
      padding="80px 200px"
      background={background.footer}
      mediaConfig={{
        belowMobileLarge: {
          padding: '40px',
        },
      }}
    >
      <Styled.Wrapper>
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveMobileLarge: {
              'grid-template-columns': '1fr 1fr',
            },
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr 1fr',
            },
          }}
          gridGap={spacing.xxl}
        >
          <Styled.Column>
            <Logo
              imgSrc="/logo/logo-footer-with-name.png"
              width="210px"
              height="50px"
            />
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
        </Grid>
      </Styled.Wrapper>
    </ContainerBase>
  );
};

export default Footer;
