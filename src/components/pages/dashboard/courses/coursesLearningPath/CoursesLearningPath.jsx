import React from 'react';
import Styled from './CoursesLearningPath.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import BodyText from '../../../../foundation/typography/BodyText';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';

const CoursesLearningPath = ({ title, descr }) => {
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
          <SectionTitle text={title} textAlign="center" />
        </Styled.HeaderWrapper>
        <Styled.TextWrapper>
          <BodyText>{descr}</BodyText>
        </Styled.TextWrapper>

        <CenteredFlexContainer>
          <ResponsiveImage
            src="/img/Frontend_Dev_Illustration.png"
            width="100%"
            padding="25%"
            backGroundSize="contain"
          />
        </CenteredFlexContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CoursesLearningPath;
