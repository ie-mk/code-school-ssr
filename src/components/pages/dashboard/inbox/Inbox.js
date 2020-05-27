import React from 'react';
import { ContainerBase } from '../../../foundation';
import Table from '../table/Table';

const Inbox = () => {
  const messages = {
    '124jq23j234': {
      senderId: '845235o2u35',
      senderName: 'John',
      email: 'some@email.com',
      senderPhone: '+44123874533',
      message: 'Some text message',
    },
    '124jq23ddj234': {
      senderId: '845235o2u35',
      senderName: 'Jack',
      email: 'some@email.com',
      senderPhone: '+44123874533',
      message: 'Some text message2',
    },
  };

  const columnHeaders = [
    'S.No',
    'Student Name',
    'Email',
    'Phone',
    'Message',
    'Actions',
  ];

  return (
    <ContainerBase margin="25px" marginRight="25px" marginTop="30px">
      <Table columnHeaders={columnHeaders} data={messages} />
    </ContainerBase>
  );
};

export default Inbox;
