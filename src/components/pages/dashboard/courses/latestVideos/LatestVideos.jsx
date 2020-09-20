import React from 'react';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import VideoCard from '../../../../videoCard/VideoCard';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import FlexContainer from '../../../../foundation/FlexContainer';

const videos = [
  {
    title: 'Choosing the right tech stack in 2020',
    descr:
      'So in this video we will cover: what is the tech stack and how to choose it, based on the industry trends, so when the time comes for you to hit the market at least you get some offers to choose from',
    videoUrl: 'https://www.youtube.com/embed/uTIUkIoGA5U',
  },
  {
    title: 'Software industry and best practices',
    descr: `What programming skills you need to have to increase your chances to be hired.
     Working in a team. Design patterns. Code readability.
    `,
    videoUrl: 'https://www.youtube.com/embed/IwtvLAgXo_0',
  },
  {
    title: `Future of software development and starting
      your own business`,
    descr: `In this video we will cover: working from anywhere in the world.
      Starting your own business and challenges delivering fullStack.
      Future is Serverless.
    `,
    videoUrl: 'https://www.youtube.com/embed/uhRQt92PYs0',
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
        {videos.map(({ title, videoUrl, descr }, idx) => {
          return (
            <VideoCard
              key={idx}
              videoUrl={videoUrl}
              title={title}
              descr={descr}
              data-test="video-card"
            />
          );
        })}
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

export default LatestVideos;
