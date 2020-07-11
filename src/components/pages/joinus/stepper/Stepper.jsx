import React, { useState } from 'react';
import Styled from './Stepper.styles';
import FlexContainer from '../../../foundation/FlexContainer';
import ContainerBase from '../../../foundation/ContainerBase';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';

const Stepper = ({ steps, activeStep, setActiveStep }) => {
  return (
    <CenteredFlexContainer
      marginTop="150px"
      display="flex"
      justifyContent="center"
      width="100%"
      mediaConfig={{
        belowTabletLarge: {
          marginTop: '100px',
        },
      }}
    >
      <FlexContainer width="85%" justifyContent="center">
        {steps.map((step, idx) => {
          const active = activeStep >= idx;
          return (
            <Styled.Step active={active} key={idx}>
              <Styled.Circle
                active={active}
                onClick={() => {
                  setActiveStep(idx);
                }}
              >
                {idx + 1}
              </Styled.Circle>
              <Styled.Label active={active}>{step.title}</Styled.Label>
            </Styled.Step>
          );
        })}
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

export default Stepper;
