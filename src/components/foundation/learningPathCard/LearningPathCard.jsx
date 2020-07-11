import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import PathTitle from '../typography/PathTitle';
import media from '../media';
import { spacing } from '../../../constants/styles';
import Router from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  padding: 30px;
  cursor: pointer;
  ${media.belowTabletLarge`
    padding: 0;
    height: 240px;
  `}
  &:first-child {
    ${media.belowTabletLarge`
      margin-top: ${spacing.xxxl};

    `}
  }
`;

const LearningPathCard = ({ imageSrc, title, learningPathId }) => {
  const handlePathClick = () => {
    Router.push(
      {
        pathname: '/courses/path',
        query: {
          learningPathId,
        },
      },
      `courses/${title.split(' ')[0].toLowerCase()}`,
      { shallow: true },
    );
  };

  return (
    <Wrapper onClick={() => handlePathClick()}>
      <ResponsiveImage height="120px" width="120px" src={imageSrc} />
      <PathTitle text={title} />
    </Wrapper>
  );
};

export default LearningPathCard;
