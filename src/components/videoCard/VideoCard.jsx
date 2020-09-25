import React from 'react';
import Styled from './VideoCard.styles';

const VideoCard = ({ videoUrl, title, descr }) => {
  return (
    <Styled.Wrapper>
      <iframe
        width="100%"
        height="200px"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Descr>{descr}</Styled.Descr>
    </Styled.Wrapper>
  );
};

export default VideoCard;
