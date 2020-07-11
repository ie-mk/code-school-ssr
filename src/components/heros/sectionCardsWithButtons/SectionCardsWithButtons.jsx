import React from 'react';
import Styled from './SectionCardsWithButtons.style';
import Grid from '../../foundation/Grid';
import SectionTitle from '../../foundation/typography/SectionTitle';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import SectionCard from '../../cards/SectionCard';
import { background, spacing } from '../../../constants/styles';
import Button from '../../foundation/button/Button';

const SectionCardsWithButtons = ({ title }) => {
  return (
    <CenteredFlexContainer marginTop="xxl">
      <SectionTitle
        text={title}
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
        <div>
          <SectionCard
            imgSrc="/svg/premium.svg"
            title="Pro"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos"
          />
          <Styled.ButtonWrapper>
            <Button size="lg" type="primary">
              JOIN
            </Button>
          </Styled.ButtonWrapper>
        </div>

        <div>
          <SectionCard
            imgSrc="/svg/free.svg"
            title="Basic"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos"
          />
          <Styled.ButtonWrapper>
            <Button size="lg" type="secondary">
              JOIN
            </Button>
          </Styled.ButtonWrapper>
        </div>
      </Grid>
    </CenteredFlexContainer>
  );
};

export default SectionCardsWithButtons;
