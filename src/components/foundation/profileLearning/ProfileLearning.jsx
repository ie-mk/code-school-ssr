import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import BodyText from '../typography/BodyText';
import media from '../media';
import { spacing } from '../../../constants/styles';
import Text24 from '../../foundation/typography/Text24';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:${({ background }) => (background ? background : '')};
  
  align-items: center;
  height: 300px;
  width: 100%;
  ${media.belowTabletLarge`
    padding: 0;
    height: 240px;
  `}
 
  }
`;

const ProfileLearning = ({ imageSrc, subtitle, title, background }) => {
  return (
    <Wrapper background={background}>
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
  );
};

export default ProfileLearning;
