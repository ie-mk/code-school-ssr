import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import withSpacing from './withSpacing';
import ResponsiveImage from './ResponsiveImage';

const LinkStyled = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Logo = ({ imgSrc, width, height, title, imageMediaConfig }) => (
  <Link href="/" as="/">
    <LinkStyled>
      {title && <h1>{title}</h1>}
      {imgSrc && (
        <ResponsiveImage
          src={imgSrc}
          alt="logo"
          width={width}
          height={height}
          backGroundSize="contain"
          mediaConfig={imageMediaConfig}
        />
      )}
    </LinkStyled>
  </Link>
);
export default withSpacing(Logo);
