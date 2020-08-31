import React, { useState, useEffect } from 'react';
import ContainerBase from '../../foundation/ContainerBase';
import { fontSizeMap, spacing, colors } from '../../../constants/styles';
import Grid from '../../foundation/Grid';
import Styled from './Inbox.styles';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import { userActions, resourceActions } from '../../../store/actions';
import moment from 'moment';
import Modal from '../../modal/Modal';
import AddNewMessage from '../../../components/pages/dashboard/inbox/addNew/AddNewMessage';
import ReplyMessage from '../../../components/pages/dashboard/inbox/addReply/ReplyMessage';
import {
  getAllUsersPublicInfo,
  getSortedMessages,
} from '../../../store/selectors';
import MessageModel from './messageModel/MessageModel';
import ReplyModel from './replyModel/ReplyModel';
import ReplyMobileModelMessage from './replyModel/replyMobileModelMessage/ReplyMobileModelMessage';

const Inbox = ({ dispatch, profile, allUsersPublicInfo, messages = [] }) => {
  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState(false);
  const [messageData, setMessageData] = useState('');
  const [MobileModelDisplay, setMobileModelDisplay] = useState(false);
  const [replyMobileModelDisplay, setReplyMobileModelDisplay] = useState(false);
  const [displayedMessageIndex, setDisplayedMessageIndex] = useState(0);

  useEffect(() => {
    if (!message) {
      const firstMessageInfo = messages && messages[0];
      const firstMessage = firstMessageInfo && firstMessageInfo.message;
      const firstSenderId = firstMessageInfo && firstMessageInfo.senderId;
      const firstUserInfo =
        allUsersPublicInfo && allUsersPublicInfo[firstSenderId];

      setMessage(firstMessage);
      setMessageData(firstMessageInfo);
      setUserInfo(firstUserInfo);
    }
  }, [messages.length]);

  const handleReply = () => {
    if (window.innerWidth < 756) {
      setReplyMobileModelDisplay(true);
    } else {
      setReply(true);
    }
  };

  const getMessage = (i, item, userinfo) => {
    // const item = messages[messageid];

    setMessage(item.message);
    setMessageData(item);
    setDisplayedMessageIndex(i);

    if (window.innerWidth < 756) {
      setMobileModelDisplay(true);
      setUserInfo(userinfo);
    }
  };

  const uid = profile && profile.uid;

  useEffect(() => {
    dispatch(
      resourceActions.fetchMessages.request({
        queries: {
          receiverId: ['==', uid],
        },
      }),
    );
  }, [uid]);

  useEffect(() => {
    dispatch(userActions.fetchAllUsersPublicInfo.request());
  }, []);

  var defaultImage = '/svg/icon_profile.svg';

  var noofLines = message && message.split(/\r\n|\r|\n/).length;

  return (
    <ContainerBase
      marginTop="xxxl"
      mediaConfig={{
        belowTabletLarge: {
          margin: '30px 0 0 0',
        },
      }}
    >
      <Styled.RowContainer>
        <Styled.ItemWrapper>
          {messages &&
            messages.map((item, i) => {
              const userinfo =
                allUsersPublicInfo && allUsersPublicInfo[item.senderId];

              var src = '/svg/icon_profile.svg';

              if (!userinfo) return null;

              return (
                <Styled.ContentWrapper
                  key={i}
                  onClick={() => getMessage(i, item, userinfo)}
                  background={
                    displayedMessageIndex === i
                      ? colors.background.SteelBlue
                      : ''
                  }
                >
                  <Styled.Image
                    src={userinfo.profileImage || userinfo.photoURL || src}
                    // src={src}
                  />
                  <Styled.Wrapper>
                    <Styled.RowContainer>
                      <Styled.TextContainer fontSize="text" fontWeight="500">
                        {userinfo.displayName}
                      </Styled.TextContainer>
                      <Styled.TextContainer fontSize="textMobile" opacity="0.5">
                        {moment(item.created).format('ll')}
                      </Styled.TextContainer>
                    </Styled.RowContainer>
                    <Styled.TextContainer fontSize="textS" paddingTop="xxS">
                      {item.message && item.message.length > 25
                        ? item.message.substring(0, 22) + '......'
                        : item.message}
                    </Styled.TextContainer>
                  </Styled.Wrapper>
                </Styled.ContentWrapper>
              );
            })}
        </Styled.ItemWrapper>
        <Styled.MessageBodyWrapper>
          {message && (
            <Styled.TextAreaWrapper
              name="message"
              rows={noofLines < 15 ? noofLines : 15}
              label="Type Your Message( Login details, portal links and guidelines)"
              value={message}
            />
          )}
          {message && (
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                size="lg"
                padding="10px 30px"
                maxWidth="280px"
                margin="0"
                onClick={() => handleReply()}
              >
                REPLY
              </Button>
            </Styled.ButtonWrapper>
          )}
        </Styled.MessageBodyWrapper>
      </Styled.RowContainer>
      <ContainerBase>
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
      <ContainerBase>
        {MobileModelDisplay && (
          <MessageModel
            styles={{
              width: '100vw',
              height: 'auto',
              color: 'black',
            }}
            fontSize={fontSizeMap.h4}
            marginTop={spacing.lg}
            fontWeight="700"
            //   onClose={() => setReply(false)}
            title={userInfo.displayName}
            image={defaultImage}
            message={message}
            onClose={() => setMobileModelDisplay(false)}
            onClickReply={() => handleReply()}
          />
        )}

        {replyMobileModelDisplay && (
          <ReplyModel
            styles={{
              width: '100%',
              height: 'auto',
              color: 'black',
            }}
            fontSize={fontSizeMap.h4}
            marginTop={spacing.lg}
            fontWeight="700"
            onClose={() => setReplyMobileModelDisplay(false)}
            title="Reply"
          >
            <ReplyMobileModelMessage
              setReply={setReplyMobileModelDisplay}
              messageData={messageData}
            />
          </ReplyModel>
        )}
      </ContainerBase>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
  messages: getSortedMessages(state),
  allUsersPublicInfo: getAllUsersPublicInfo(state),
});

export default connect(mapStateToProps)(Inbox);
