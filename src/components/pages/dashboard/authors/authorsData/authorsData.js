import React from 'react';
import { ContainerBase } from '../../../../foundation';
import Table from '../../table/Table';
import Button from '../../../../foundation/button/Button';

const messages = {
  '124jq23j234': {
    senderId: '845235o2u35',
    authorName: 'John',
    email: 'some@email.com',
    phone: '+44123874533',
    courses: '02',
    skills: 'Html,CSS',
  },
  '124jq23ddj234': {
    senderId: '845235o2u35',
    authorName: 'John',
    email: 'some@email.com',
    phone: '+44123874533',
    courses: '02',
    skills: 'Html,CSS',
  },
};

const columnHeaders = [
  'S.No',
  'Author Name',
  'Email',
  'Phone',
  'Courses',
  'Skills',
  'Actions',
];

const Inbox = () => {
  const handleReply = messageId => {
    // TODO
  };

  return (
    <Table columnHeaders={columnHeaders}>
      {Object.keys(messages).map((id, idx) => {
        const rowData = messages[id];
        if (!rowData) return null;

        return (
          <Table.Tr key={id}>
            <Table.Td>{idx + 1}</Table.Td>
            <Table.Td>{rowData.authorName}</Table.Td>
            <Table.Td>{rowData.email}</Table.Td>
            <Table.Td>{rowData.phone}</Table.Td>
            <Table.Td>{rowData.courses}</Table.Td>
            <Table.Td>{rowData.skills}</Table.Td>
            <Table.Td>
              <Button
                width="100px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => handleReply(id)}
              >
                Remove
              </Button>
            </Table.Td>
          </Table.Tr>
        );
      })}
    </Table>
  );
};

export default Inbox;
