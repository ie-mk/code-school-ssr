import React from 'react';
import Logo from './Logo';

const LogoWithConfig = () => {
  return (
    <Logo
      imgSrc="/logo/logo_with_name.png"
      width="200px"
      height="58px"
      mediaConfig={{
        belowTabletLarge: {
          margin: '0 20px 0 10px',
        },
      }}
      zIndex="9"
      imageMediaConfig={{
        belowTabletLarge: {
          width: '100px',
          height: '29px',
        },
      }}
    />
  );
};

export default LogoWithConfig;
