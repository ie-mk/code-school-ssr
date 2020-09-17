import React from 'react';
import Styled from './HeroFront.styles';
import ResponsiveImage from '../../foundation/ResponsiveImage';
import Button from '../../foundation/button/Button';
import { useRouter } from 'next/router';
import FlexContainer from '../../foundation/FlexContainer';
import Text48 from '../../foundation/typography/Text48';
import ContainerBase from '../../foundation/ContainerBase';

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
        mediaConfig={{
          belowTabletLarge: {
            backgroundImage: 'url("/img/new/Hero_Image.png")',
          },
        }}
      />
      <Styled.Content>
        <FlexContainer height="60vh" marginTop="200px">
          <Styled.TextWrapper>
            <Styled.TextLine>Join 100's of developers</Styled.TextLine>
            <Styled.TextLine>advancing their code skills</Styled.TextLine>
            <Styled.TextLine>at Code School, London</Styled.TextLine>
          </Styled.TextWrapper>
          <Styled.SignupContainer>
            <ContainerBase padding="90px 80px">
              <Text48 text="Want to be notifiend when we launch?" />
            </ContainerBase>
            <Styled.ButtonWrapper>
              <Button width="50%" size="lg" type="primary">
                SIGN UP
              </Button>
            </Styled.ButtonWrapper>
          </Styled.SignupContainer>
        </FlexContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
