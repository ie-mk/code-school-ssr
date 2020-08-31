import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import PathTitle from '../typography/PathTitle';
import media from '../media';
import { spacing } from '../../../constants/styles';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  padding: 30px;
  cursor: pointer;
  background: linear-gradient(180deg, #293150 0%, #1e2540 100%) 0% 0% no-repeat
    padding-box;
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
  const router = useRouter();

  const handlePathClick = () => {
    // router.push(
    //   {
    //     pathname: '/courses/path',
    //     query: {
    //       learningPathId,
    //     },
    //   },
    //   `courses/${title.split(' ')[0].toLowerCase()}`,
    //   { shallow: true },
    // );

    const path = `/courses/path?learningPathId=${learningPathId}`;
    router.push(path, path, { shallow: true });
  };

  return (
    <Wrapper onClick={() => handlePathClick()}>
      <ResponsiveImage height="120px" width="120px" src={imageSrc} />
      <PathTitle margin="30px 0 0" fontWeight="500" text={title} />
    </Wrapper>
  );
};

export default LearningPathCard;
