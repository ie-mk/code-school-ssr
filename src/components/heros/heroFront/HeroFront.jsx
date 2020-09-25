import React from 'react';
import Styled from './HeroFront.styles';
import ResponsiveImage from '../../foundation/ResponsiveImage';
import Button from '../../foundation/button/Button';
import { useRouter } from 'next/router';
import FlexContainer from '../../foundation/FlexContainer';
import Text48 from '../../foundation/typography/Text48';
import ContainerBase from '../../foundation/ContainerBase';
import VerticalSignUp from '../../mailChimp/VerticalSignUp';

const HeroFront = () => {
  const router = useRouter();
  const getInTouch = () => {
    router.push(
      {
        pathname: '/getInTouch',
      },
      '/getInTouch',
    );
  };

  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/new/Hero_Image-min.png"
        minHeight="100%"
        width="100%"
        position="absolute"
        backGroundPosition="0 50px"
        mediaConfig={{
          aboveTabletLarge: {
            //backgroundImage: 'url("/img/new/Hero_Image-min.png")',
            backGroundPosition: '0 85px',
          },
        }}
      />
      <Styled.Content>
        <FlexContainer
          minHeight="50vh"
          marginTop="60px"
          flexDirection="column"
          mediaConfig={{
            aboveTabletLarge: {
              flexDirection: 'row',
              marginTop: '100px',
            },
          }}
        >
          <Styled.TextWrapper>
            <Styled.TextContainer>
              <Styled.TextLine>Join 100's of</Styled.TextLine>
              <Styled.TextLine> developers</Styled.TextLine>
              <Styled.TextLine>advancing</Styled.TextLine>
              <Styled.TextLine> their code skills</Styled.TextLine>
              <Styled.TextLine>at Code School,</Styled.TextLine>
              <Styled.TextLine> London</Styled.TextLine>
            </Styled.TextContainer>
          </Styled.TextWrapper>
          <Styled.SignupContainer>
            <Text48 text="Want to be notified when we launch?" />
            <VerticalSignUp />
            <Styled.SpamNotice>We won't send you a spam</Styled.SpamNotice>
          </Styled.SignupContainer>
        </FlexContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
