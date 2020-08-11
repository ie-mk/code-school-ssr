import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ContainerBase } from '../../../foundation';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';
import Table from '../table/Table';
import Button from '../../../foundation/button/Button';
import Styled from './Inbox.styles';
import AddNewMessage from './addNew/AddNewMessage';
import ReplyMessage from './addReply/ReplyMessage';
import { resourceActions } from '../../../../store/actions';
import Modal from '../../../modal/Modal';
import { spacing, fontSizeMap } from '../../../../constants/styles';
import SpinnerLarge from '../../../foundation/spinner/SpinnerLarge';
import moment from 'moment';

const columnHeaders = [
  'S.No',
  'Student Name',
  'Email',
  'Phone',
  'Date',
  'Message',
  'Actions',
];

const Inbox = ({ dispatch, loading, profile, messages }) => {
  const handleReply = rowData => {
    setReply(true);
    setMessageData(rowData);
    // TODO
  };

  const [newAdd, setNewAdd] = useState(false);
  const [reply, setReply] = useState(false);
  const [messageData, setMessageData] = useState('');
  const [activeTab, setActiveTab] = useState('sent');

  const uid = profile && profile.uid;
  const showSent = activeTab === 'sent';
  const showReceived = activeTab === 'received';

  useEffect(() => {
    dispatch(resourceActions.resetMessages());
    dispatch(
      resourceActions.fetchMessages.request({
        queries: {
          [activeTab === 'received' ? 'receiverId' : 'senderId']: ['==', uid],
        },
      }),
    );
  }, [uid, activeTab]);

  return (
    <>
      {loading ? <SpinnerLarge /> : null}
      <ContainerBase margin="25px" marginRight="25px" marginTop="30px">
        <CenteredFlexContainer paddingTop="xl" flexDirection="row">
          <Styled.Title
            onClick={() => setActiveTab('received')}
            active={showReceived}
          >
            Received
          </Styled.Title>
          <Styled.Title onClick={() => setActiveTab('sent')} active={showSent}>
            Sent
          </Styled.Title>
          <Styled.ButtonWrapper>
            <Button
              type="primary"
              width="200px"
              borderRadius="sm"
              height="45px"
              size="sm"
              onClick={() => setNewAdd(true)}
            >
              <i className="fa fa-plus" aria-hidden="true" />
              New Message
            </Button>
          </Styled.ButtonWrapper>
        </CenteredFlexContainer>

        <Table columnHeaders={columnHeaders}>
          {Object.keys(messages).map((id, idx) => {
            const rowData = messages[id];
            if (!rowData) return null;
            return (
              <Table.Tr key={id}>
                <Table.Td>{idx + 1}</Table.Td>
                <Table.Td>{rowData.subject}</Table.Td>
                <Table.Td>{rowData.email}</Table.Td>
                <Table.Td>{rowData.senderPhone}</Table.Td>
                <Table.Td>
                  {moment(rowData.created).format('DD/MM/YYYY, h:mm:ss a')}
                </Table.Td>
                <Table.Td>{rowData.message}</Table.Td>
                <Table.Td>
                  <Button
                    type="action"
                    size="sm"
                    borderRadius="sm"
                    onClick={() => handleReply(rowData)}
                  >
                    Reply
                  </Button>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table>

        <ContainerBase>
          {newAdd && (
            <Modal
              styles={{
                width: '800px',
                height: 'auto',
                color: 'black',
              }}
              fontSize={fontSizeMap.h4}
              marginTop={spacing.lg}
              fontWeight="700"
              onClose={() => setNewAdd(false)}
              title="New Message"
            >
              <AddNewMessage setNewAdd={setNewAdd} />
            </Modal>
          )}

          {reply && (
            <Modal
              styles={{
                width: '800px',
                height: 'auto',
                color: 'black',
              }}
              fontSize={fontSizeMap.h4}
              marginTop={spacing.lg}
              fontWeight="700"
              onClose={() => setReply(false)}
              title="Reply"
            >
              <ReplyMessage setReply={setReply} messageData={messageData} />
            </Modal>
          )}
        </ContainerBase>
      </ContainerBase>
    </>
  );
};
const mapStateToProps = state => ({
  loading: state.messages.loading,
  profile: state.user.loginProviderData,
  messages: state.messages.data,
});
export default connect(mapStateToProps)(Inbox);
