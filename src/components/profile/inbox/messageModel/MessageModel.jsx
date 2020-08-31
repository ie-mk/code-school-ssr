import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './MessageModel.styles';
import Button from '../../../foundation/button/Button';

const Modal = ({
  title,
  onClose,
  elementSelector = '__next',
  styles,
  fullPageWidth,
  image,
  message,
  onClickReply,
}) => {
  return ReactDOM.createPortal(
    <Styled.ModalOverlay>
      <Styled.ModalContainer
        data-test="modal"
        style={styles}
        fullPageWidth={fullPageWidth}
      >
        <Styled.RowContainer>
          <Styled.Wrapper>
            <Styled.Image src={image} />
            <Styled.TextContainer fontSize="h4">{title}</Styled.TextContainer>
          </Styled.Wrapper>
          <Styled.CloseButton onClick={() => onClose()}>
            {/*<div>x</div>*/}
            <i className="fa fa-close" />{' '}
          </Styled.CloseButton>
        </Styled.RowContainer>

        <Styled.MessageBodyWrapper>
          {message && <Styled.MessageBody>{message}</Styled.MessageBody>}

          {message && (
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                size="lg"
                padding="10px 30px"
                maxWidth="80px"
                margin="0"
                onClick={() => onClickReply()}
              >
                REPLY
              </Button>
            </Styled.ButtonWrapper>
          )}
        </Styled.MessageBodyWrapper>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>,
    document.getElementById(elementSelector),
  );
};

export default Modal;
