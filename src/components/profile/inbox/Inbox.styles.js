import styled from 'styled-components';
import media from '../../foundation/media';

import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
  background,
} from '../../../constants/styles';

export const ItemWrapper = styled.div`
  padding: 0 ${spacing.xl};
  background: ${colors.background.violetsecondary};
  border-radius: ${spacing.sm};
  overflow-y: auto;
  height: 500px;
  width: 500px;
  ${media.belowTablet`
     width: 100%;
     padding: 0 ${spacing.md};

  `};
  div: last-child {
    border-bottom: 0;
  }
`;

const TextAreaWrapper = styled.textarea`
  color: ${colors.white};
  background: ${colors.background.violetsecondary};
  width: 100%;
  max-height: 400px;
  padding: ${spacing.sm};
  border: 1px solid #909090;
  border-radius: ${borderRadius.sm};
  opacity: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 433px;
  align-items: center;
  padding: ${spacing.lg} 0;
  font-weight: 400;
  border-bottom: 1px solid ${colors.primary};
  cursor: pointer;
  background: ${({ background }) => (background ? background : '')};
  ${media.belowTablet`
    padding: ${spacing.xS} 0;
    width: 100%;
  `}
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  font-size: ${({ fontSize }) =>
    fontSizeMap[fontSize] ? fontSizeMap[fontSize] : '12px'};
    opacity: ${({ opacity }) => (opacity ? opacity : '')}; //0.5;
  padding-top : ${({ paddingTop }) =>
    spacing[paddingTop] ? spacing[paddingTop] : ' '};
    spacing[paddingTop] ? spacing[paddingTop] : ' '};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')}; 

`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  ${media.belowTablet`
    width: 40px;
    height: 40px;
  `}
`;

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;

const MessageBodyWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  ${media.belowTablet`
    display: none;
  `}
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
  ItemWrapper,
  ContentWrapper,
  RowContainer,
  TextContainer,
  Image,
  Wrapper,
  MessageBody,
  ButtonWrapper,
  MessageBodyWrapper,
  TextAreaWrapper,
};
