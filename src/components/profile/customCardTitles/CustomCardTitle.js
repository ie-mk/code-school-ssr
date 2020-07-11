import React from 'react';
import CardTitle from '../../foundation/typography/CardTitle';

const CustomCardTitle = ({ customMargin, mobileMargin, ...props }) => {
  return (
    <CardTitle
      margin={customMargin}
      fontWeight="500"
      mediaConfig={{
        belowTabletLarge: {
          margin: mobileMargin,
        },
      }}
      {...props}
    />
  );
};
export default CustomCardTitle;
