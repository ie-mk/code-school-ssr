import React from 'react';
import SectionTitle from '../foundation/typography/SectionTitle';
import VideoCard from '../videoCard/VideoCard';
import CenteredFlexContainer from '../foundation/CenteredFlexContainer';
import FlexContainer from '../foundation/FlexContainer';
import ResponsiveImage from '../foundation/ResponsiveImage';
import Styled from './WhyJoin.styles';

const whyArr = [
  {
    descr:
      'Engaging Video Courses on the Web development courses you Need to secure a job as a web developer',
    img: '/img/new/why_01.png',
  },
  {
    descr: `Learn 10X faster with practical Challenges using our inbuilt state- Of-the-art coding editor!`,
    img: '/img/new/why_02.png',
  },
  {
    descr: `Get access to our exclusive Coding community to help You learn & grow together`,
    img: '/img/new/why_03.png',
  },
];

export const WhyCard = ({ img, descr }) => (
  <Styled.CardWrapper>
    <ResponsiveImage src={img} height="238px" width="238px" margin="0 0 30px" />
    <Styled.CardText>{descr}</Styled.CardText>
  </Styled.CardWrapper>
);

const WhyJoin = () => {
  return (
    <CenteredFlexContainer width="100%">
      <SectionTitle
        fontWeight="400"
        noMargin={true}
        margin="0 0 50px"
        text="Why Join?"
        mediaConfig={{
          aboveTabletLarge: {
            margin: '80px 0',
          },
        }}
      />
      <FlexContainer flexWrap="wrap">
        {whyArr.map(({ img, descr }, idx) => {
          return <WhyCard key={idx} img={img} descr={descr} />;
        })}
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

export default WhyJoin;
