import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { fontSizeMap, spacing } from '../../constants/styles';

const LinkWrapper = styled.div`
  margin-left: 10px;
  font-size: ${fontSizeMap.h5};
  font-weight: 600;
  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    margin-right: ${spacing.xxl};
  }
`;

const MenuLink = ({ href, as, text, children, dataTest }) => (
  <LinkWrapper>
    <Link href={href} as={as}>
      <a data-test={dataTest}>{children ? children : text}</a>
    </Link>
  </LinkWrapper>
);

export default MenuLink;
