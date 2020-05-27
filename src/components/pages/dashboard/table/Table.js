import React from 'react';
import Styled from './Table.styles';
import Button from '../../../foundation/button/Button';

const Table = ({ columnHeaders, data }) => {
  const handleReply = messageId => {
    // TODO
  };

  const headers = columnHeaders.map((key, index) => (
    <Styled.Th>{columnHeaders[index]}</Styled.Th>
  ));

  const tableRows = Object.keys(data).map((id, idx) => {
    const rowData = data[id];
    if (!rowData) return null;

    return (
      <Styled.Tr key={id}>
        <Styled.Td>{idx + 1}</Styled.Td>
        <Styled.Td>{rowData.senderName}</Styled.Td>
        <Styled.Td>{rowData.email}</Styled.Td>
        <Styled.Td>{rowData.senderPhone}</Styled.Td>
        <Styled.Td>{rowData.message}</Styled.Td>
        <Styled.Td>
          <Button
            width="100px"
            height="48px"
            type="action"
            fontSize="20px"
            borderRadius="sm"
            onClick={() => handleReply(id)}
          >
            Reply
          </Button>
        </Styled.Td>
      </Styled.Tr>
    );
  });
  return (
    <Styled.Table>
      <Styled.THead>
        <tr>{headers}</tr>
      </Styled.THead>
      <Styled.Tbody>{tableRows}</Styled.Tbody>
    </Styled.Table>
  );
};

export default Table;
