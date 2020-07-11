import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminDropDown = ({
  name,
  label,
  classNameString,
  placeholder,
  component,
  width,
  height,
  options,
  displayLabelLeft,
  dropdownWidth,
  marginLeft,
  marginRight,
  backgroundColor,
  formikField = true,
  onChange,
}) => {
  return (
    <Styled.Wrapper width={width} displayLabelLeft={displayLabelLeft}>
      <Styled.Label marginLeft={marginLeft} marginRight={marginRight}>
        {label}
      </Styled.Label>
      <Styled.InputStyles
        dropdownWidth={dropdownWidth}
        height={height}
        backgroundColor={backgroundColor}
      >
        {formikField ? (
          <Field
            className={classNameString}
            name={name}
            component={component}
            placeholder={placeholder}
          >
            {options}
          </Field>
        ) : (
          <select onChange={onChange}>
            {options.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        )}
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminDropDown;
