import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './Modal.styles';
import CenteredFlexContainer from '../foundation/CenteredFlexContainer';

const Modal = ({
  children,
  title,
  onClose,
  elementSelector = '__next',
  styles,
  fullPageWidth,
  fontWeight,
  fontSize,
  marginTop,
}) => {
  return ReactDOM.createPortal(
    <Styled.ModalOverlay>
      <Styled.ModalContainer
        data-test="modal"
        style={styles}
        fullPageWidth={fullPageWidth}
      >
        <Styled.Header
          fontWeight={fontWeight}
          fontSize={fontSize}
          marginTop={marginTop}
        >
          {title}

          {/* <Styled.CloseButton onClick={() => onClose()}>
            <i className="fa fa-close" />{' '}
          </Styled.CloseButton> */}
        </Styled.Header>
        <Styled.Content>{children}</Styled.Content>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>,
    document.getElementById(elementSelector),
  );
};

export default Modal;
