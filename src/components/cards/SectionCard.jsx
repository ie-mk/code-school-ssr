import React from 'react';
import Styled from './SectionCard.styles';
import ResponsiveImage from '../foundation/ResponsiveImage';
import CardTitle from '../foundation/typography/CardTitle';
import BodyText from '../foundation/typography/BodyText';
import CenteredFlexContainer from '../foundation/CenteredFlexContainer';
import { background, spacing } from '../../constants/styles';

const SectionCard = ({ imgSrc, title, text }) => {
  return (
    <CenteredFlexContainer
      maxWidth="800px"
      background={background.cardBackground}
      padding={spacing.xxl}
    >
      <Styled.Wrapper>
        <ResponsiveImage
          src={imgSrc}
          maxWidth="165px"
          width="100%"
          height="165px"
          margin={spacing.xxl}
        />
        <CardTitle text={title} />
        <BodyText marginBottom={spacing.lg}>{text}</BodyText>
      </Styled.Wrapper>
    </CenteredFlexContainer>
  );
};

export default SectionCard;
