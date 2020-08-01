import React from 'react';
import Styled from './HeroFront.styles';
import ResponsiveImage from '../../foundation/ResponsiveImage';
import HeroTitle from '../../foundation/typography/HeroTitle';
import BodyText from '../../foundation/typography/BodyText';
import Button from '../../foundation/button/Button';
import { useRouter } from 'next/router';

const HeroFront = () => {
  const router = useRouter();
  const getInTouch = () => {
    router.push(
      {
        pathname: '/getInTouch',
      },
      `/getInTouch`,
    );
  };

  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100vh"
        width="100%"
        position="absolute"
        mediaConfig={{
          belowTabletLarge: {
            backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        <Styled.HeaderWrapper>
          <HeroTitle text="THE TECHNOLOGY SKILL PLATFORM" />
        </Styled.HeaderWrapper>
        <Styled.TextWrapper>
          <BodyText>
            With real world projects you’ll master the tech skills companies
            want. Our knowledgeable mentors guide your learning and are focused
            on answering your questions, motivating you and keeping you on
            track. Get a custom learning plan tailored to fit your busy life.
            Learn at your own pace and reach your personal goals on the schedule
            that works best for you.
          </BodyText>
        </Styled.TextWrapper>
        <Styled.ButtonWrapper>
          <Button size="lg" type="primary">
            COURSES
          </Button>
          <Button size="lg" type="secondary" onClick={getInTouch}>
            GET IN TOUCH
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
