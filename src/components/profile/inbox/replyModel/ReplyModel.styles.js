import styled, { css } from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${'' /* width: 100%;
  hight: 100%; */}
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  ${({ fullPageWidth }) =>
    fullPageWidth
      ? css`
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        `
      : ''}
  border: 1px solid grey;
  overflow: hidden;
  box-sizing: border-box;
  background-color: white;
  z-index: 100;
  border-radius: 4px;
  ${({ styles }) =>
    styles && styles.width
      ? css`
          width: ${styles.width};
        `
      : 'width: 100%'}
  ${({ styles }) =>
    styles && styles.height
      ? css`
          height: ${styles.height};
        `
      : 'height: 100%'}
  ${({ styles }) =>
    styles && styles.maxHeight
      ? css`
          max-height: ${styles.maxHeight};
        `
      : ''}
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px;
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  z-index: 100;
  background-color: white;
`;

const Content = styled.div`
  overflow-y: auto;
  height: 94%;
  padding: 10px;
`;

const CloseButton = styled.span`
  width: 24px;
  height: 24px;
  fill: gray;
  cursor: pointer;
  color: gray;
`;

export default {
  ModalContainer,
  ModalOverlay,
  CloseButton,
  Header,
  Content,
};
