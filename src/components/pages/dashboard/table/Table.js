import React from 'react';
import Styled from './Table.styles';

const Table = ({ columnHeaders, children }) => {
  const headers = columnHeaders.map((key, index) => (
    <Styled.Th key={key}>{columnHeaders[index]}</Styled.Th>
  ));

  return (
    <Styled.Table>
      <Styled.THead>
        <tr>{headers}</tr>
      </Styled.THead>
      <Styled.Tbody>{children}</Styled.Tbody>
    </Styled.Table>
  );
};

Table.Tr = Styled.Tr;
Table.Td = Styled.Td;

export default Table;
