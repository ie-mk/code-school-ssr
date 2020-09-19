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
        src="/img/new/Hero_Image.png"
        height="100vh"
        width="100%"
        position="absolute"
        backGroundPosition="0 85px"
        mediaConfig={{
          belowTabletLarge: {
            backgroundImage: 'url("/img/new/Hero_Image.png")',
          },
        }}
      />
      <Styled.Content>
        <FlexContainer minHeight="60vh" marginTop="16%">
          <Styled.TextWrapper>
            <Styled.TextContainer>
              <Styled.TextLine>Join 100's of developers</Styled.TextLine>
              <Styled.TextLine>advancing their code skills</Styled.TextLine>
              <Styled.TextLine>at Code School, London</Styled.TextLine>
            </Styled.TextContainer>
          </Styled.TextWrapper>
          <Styled.SignupContainer>
            <ContainerBase padding="70px 53px 0">
              <Text48 text="Want to be notified when we launch?" />
            </ContainerBase>
            <VerticalSignUp />
            <Styled.SpamNotice>We won't send you a spam</Styled.SpamNotice>
          </Styled.SignupContainer>
        </FlexContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
