import styled, { css } from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../../constants/styles'; // '../../../constants/styles';
import media from '../../../foundation/media';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: ${colors.background.violetprimary};
  display: flex;
  justify-content: center;
  //align-items: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  ${({ fullPageWidth }) =>
    fullPageWidth
      ? css`
          top: 5%;
          bottom: 5%;
          left: 10%;
          right: 10%;
        `
      : ''}
  //border: 1px solid grey;
  overflow: hidden;
  box-sizing: border-box;
 // background-color: white;
  z-index: 100;
  border-radius: 4px;
  ${({ styles }) =>
    styles && styles.width
      ? css`
          width: ${styles.width};
        `
      : 'width: 400px'}
  ${({ styles }) =>
    styles && styles.height
      ? css`
          height: ${styles.height};
        `
      : 'height: 300px'}
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
  background: '#1B3052';
`;
//
// const Content = styled.div`
//   overflow-y: auto;
//   height: 94%;
//   padding: 20px;
// `;

const CloseButton = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${colors.white};
  font-size: ${fontSizeMap.h4};
  font-weight: 400;
  border: 1px solid ${colors.white};
  border-radius: 10px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.violet};
  padding: ${spacing.lg};
  // border-bottom: 1px solid white;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  ${media.belowTabletLarge`
    width: 40px;
    height: 40px;
  `}
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${spacing.lg} 0;
  font-weight: 400;
  border-bottom: 1px solid ${colors.primary};
  ${media.belowTabletLarge`
    padding: ${spacing.xS} 0;
    width: 300px;
  `}
`;

const TextContainer = styled.div`
  font-size: ${({ fontSize }) =>
    fontSizeMap[fontSize] ? fontSizeMap[fontSize] : '12px'};
  opacity: ${({ opacity }) => (opacity ? opacity : '')};

  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};
  color: ${colors.white};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  //flex-direction: column;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
`;

const MessageBodyWrapper = styled.div`
  flex: 1;
  flex-direction: column;
 // background: ${colors.violet};
  padding: ${spacing.lg};
  color: ${colors.white};

`;

const MessageBody = styled.div`
  padding: ${spacing.lg};
  border: 1px solid ${colors.white};
  border-radius: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${spacing.lg};
`;

export default {
  ModalContainer,
  ModalOverlay,
  CloseButton,
  Header,
  RowContainer,
  Image,
  ContentWrapper,
  TextContainer,
  Wrapper,
  CloseButtonWrapper,
  MessageBody,
  ButtonWrapper,
  MessageBodyWrapper,
};
