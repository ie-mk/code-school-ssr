import React from 'react';
import ContainerBase from '../../../foundation/ContainerBase';
import Button from '../../../foundation/button/Button';
import SectionTitle from '../../../foundation/typography/SectionTitle';
import Styled from './StartLearning.styles';

const StartLearning = () => {
  return (
    <ContainerBase
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginBottom="xxxl"
    >
      <SectionTitle text="Thank You, For Joining Us " />
      <Styled.Text> We have received your payment of $3999</Styled.Text>

      <Styled.ButtonWrapper>
        <Button type="primary" size="sm" padding="lg">
          Start Learning
        </Button>
      </Styled.ButtonWrapper>
    </ContainerBase>
  );
};

export default StartLearning;
