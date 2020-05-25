import React from 'react';
import Styled from './SectionCards.styles';
import Grid from '../../foundation/Grid';
import SectionTitle from '../../foundation/typography/SectionTitle';
import ContainerBase from '../../foundation/ContainerBase';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import SectionCard from '../../cards/SectionCard';
import { background, spacing } from '../../../constants/styles';

const SectionCards = () => {
  return (
    <CenteredFlexContainer marginTop="xxl">
      <SectionTitle
        text="How it works"
        marginBottom={spacing.xl}
        marginTop={spacing.xl}
      />
      <Grid
        columns="1fr"
        mediaConfig={{
          aboveTablet: {
            'grid-template-columns': '1fr 1fr',
          },
          belowDesktop: {
            'grid-gap': spacing.xl,
          },
        }}
        gridGap={spacing.xxxxl}
      >
        <SectionCard
          imgSrc="/svg/free.svg"
          title="Pro"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos"
        />
        <SectionCard
          imgSrc="/svg/free.svg"
          title="Basic"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos"
        />
      </Grid>
    </CenteredFlexContainer>
  );
};

export default SectionCards;
