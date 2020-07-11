import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { fontSizeMap, spacing } from '../../constants/styles';
import media from './media';

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ noMargin }) => (noMargin ? '0' : '10px')};
  font-size: ${fontSizeMap.h5};
  font-weight: 600;
  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    margin-right: ${({ noMargin }) => (noMargin ? '0' : spacing.xxl)};
    ${media.belowTabletLarge`
        margin: 0;
     `}
  }
  ${media.belowTabletLarge`
    width: 100%;
    justify-content: center;
    margin: 15px 0;
  `}
`;

const MenuLink = ({ href, as, text, children, dataTest, noMargin }) => (
  <LinkWrapper noMargin={noMargin}>
    <Link href={href} as={as}>
      <a data-test={dataTest}>{children ? children : text}</a>
    </Link>
  </LinkWrapper>
);

export default MenuLink;
