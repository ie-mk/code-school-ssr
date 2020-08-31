import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import BodyText from '../typography/BodyText';
import media from '../media';
import { spacing } from '../../../constants/styles';
import Text24 from '../../foundation/typography/Text24';
import ErrorBoundary from '../../ErrorBoundary';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:${({ background }) => (background ? background : '')};

  align-items: center;
  height: 300px;
  width: 100%;

  cursor: pointer;
  ${media.belowTabletLarge`
    padding: 0;
    height: 240px;
  `}

  }
`;

const ProfileLearning = ({
  imageSrc,
  subtitle,
  title,
  background,
  onClick,
}) => {
  return (
    <ErrorBoundary>
      <Wrapper background={background} onClick={onClick}>
        <ResponsiveImage height="100px" width="100px" src={imageSrc} />
        <Text24
          margin="54px 0 20px 0"
          mediaConfig={{
            belowTabletLarge: {
              margin: '27px 0 10px 0',
            },
          }}
          text={title}
        />
        <BodyText>{subtitle}</BodyText>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default ProfileLearning;
