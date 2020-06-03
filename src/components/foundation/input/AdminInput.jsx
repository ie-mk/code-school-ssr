import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminInput = ({
  name,
  label,
  type,
  classNameString,
  placeholder,
  width,
  backgroundColor,
  disabled,
}) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles backgroundColor={backgroundColor}>
        <Field
          className={classNameString}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminInput;
