import React from 'react';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
const CustomAdminDropdwon = ({ name, label, options, placeholder }) => {
  return (
    <AdminDropDown
      classNameString="select"
      name={name}
      label={label}
      component="select"
      marginLeft="25px"
      marginRight="20px"
      width="100%"
      dropdownWidth="250px"
      height="47px"
      displayLabelLeft={true}
      placeholder={placeholder}
      options={options}
    />
  );
};
export default CustomAdminDropdwon;
