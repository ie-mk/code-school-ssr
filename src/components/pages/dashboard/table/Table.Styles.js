import styled from 'styled-components';
import {
  spacing,
  fontSizeMap,
  colors,
  borderRadius,
  table,
} from '../../../../constants/styles';

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
`;

const Td = styled.td`
  height: 92px;
  font-size: ${fontSizeMap.h4};
`;
const THead = styled.thead`
  background-color: ${table.headerBackground};
  color: ${colors.white};
`;
const Th = styled.th`
  height: 60px;
  font-size: ${fontSizeMap.h4};
  font-weight: lighter;

  &:first-child {
    border-bottom-left-radius: ${borderRadius.sm};
    border-top-left-radius: ${borderRadius.sm};
    padding-left: ${spacing.lg};
  }

  &:last-child {
    border-bottom-right-radius: ${borderRadius.sm};
    border-top-right-radius: ${borderRadius.sm};
    padding-right: ${spacing.xl};
  }
`;
const Tbody = styled.tbody`
  height: 50px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Tr = styled.tr`
  :nth-child(even) {
    background-color: ${table.rowBackground};
  }
`;

export default {
  Tbody,
  Table,
  Td,
  Th,
  THead,
  Tr,
};
