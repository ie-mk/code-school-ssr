import React from 'react';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import VideoCard from '../videoCard/VideoCard';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import FlexContainer from '../../../../foundation/FlexContainer';
import ResponsiveImage from '../../../../foundation/ResponsiveImage';

const whyArr = [
  {
    descr:
      'So in this video we will cover: what is the tech stack and how to choose it, based on the industry trends, so when the time comes for you to hit the market at least you get some offers to choose from',
    img: '/img/new/why_01.png',
  },
  {
    descr: `What programming skills you need to have to increase your chances to be hired.
     Working in a team. Design patterns. Code readability.
    `,
    img: '/img/new/why_02.png',
  },
  {
    descr: `In this video we will cover: Starting your own business and challenges delivering fullStack.
      Future is Serverless.
    `,
    img: '/img/new/why_03.png',
  },
];

const LatestVideos = () => {
  return (
    <CenteredFlexContainer>
      <SectionTitle
        fontWeight="400"
        noMargin={true}
        margin="100px 0"
        text="Our Latest Videos"
      />
      <FlexContainer>
        {whyArr.map(({ img, descr }, idx) => {
          return <ResponsiveImage key={idx} srcImg={img} />;
        })}
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

export default LatestVideos;
