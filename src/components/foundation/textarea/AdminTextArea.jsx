import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminTextArea = ({
  name,
  label,
  rows,
  cols,
  width,
  backgroundColor,
  placeholder,
  height,
  disabled,
  noMargin,
}) => {
  return (
    <Styled.Wrapper width={width} noMargin={noMargin}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles
        backgroundColor={backgroundColor}
        height={height}
        disabled={disabled}
      >
        <Field
          className="textarea"
          name={name}
          component="textarea"
          rows={rows}
          cols={cols}
          placeholder={placeholder}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminTextArea;
