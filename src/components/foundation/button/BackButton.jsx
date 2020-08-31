import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { spacing } from '../../../constants/styles';
import media from '../media';
import { Router } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    display: inline-block;
    margin-right: ${spacing.sm};
    font-size: 22px;
    ${media.belowMobileLarge`
      font-size: 10px;
      margin-right: 4px;
    `}
  }
`;

const BackButton = () => {
  return (
    <Button
      type="secondary"
      width="100px"
      onClick={() => {
        window.history.back();
      }}
      mediaConfig={{
        belowTabletLarge: {
          padding: '3px',
          width: '60px',
          fontSize: '10px',
          border: '1px solid white',
        },
      }}
    >
      <Wrapper>
        <i className="fa fa-arrow-left" />
        BACK
      </Wrapper>
    </Button>
  );
};

export default BackButton;
