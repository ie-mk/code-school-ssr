import React from 'react';
import Styled from '../Admin.styles';

const CheckBoxWithText = ({
  label,
  width,
  color,
  fontSize,
  noMargin,
  padding,
}) => {
  return (
    <Styled.Wrapper width={width} noMargin={noMargin} padding={padding}>
      <Styled.ItemContainer>
        <img
          src="/svg/checkmark-circle-outline.svg"
          aria-hidden="true"
          alt="icon"
        />
        <Styled.Label fontSize={fontSize} color={color}>
          {label}
        </Styled.Label>
      </Styled.ItemContainer>
    </Styled.Wrapper>
  );
};

export default CheckBoxWithText;
