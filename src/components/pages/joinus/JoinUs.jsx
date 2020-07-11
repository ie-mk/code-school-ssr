import React, { useState } from 'react';
import Stepper from './stepper/Stepper';
import { ContainerBase } from '../../foundation';
import SelectMembership from './selectMembership/SelectMembership';
import YourDetails from './yourdetails/YourDetails';
import Payment from './payment/Payment';
import StartLearning from './startLearning/StartLearning';

const steps = [
  { title: 'Select Your Membership' },
  { title: 'Your Details' },
  { title: 'Payment' },
  { title: 'Start Learning' },
];

const JoinUs = () => {
  const [activeStep, setActiveStep] = useState(0);

  const showPage1 = activeStep === 0;
  const showPage2 = activeStep === 1;
  const showPage3 = activeStep === 2;
  const showPage4 = activeStep === 3;

  return (
    <>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <ContainerBase marginTop="100px">
        {showPage1 && <SelectMembership />}
        {showPage2 && <YourDetails />}
        {showPage3 && <Payment />}
        {showPage4 && <StartLearning />}
      </ContainerBase>
    </>
  );
};

export default JoinUs;
