import styled from 'styled-components';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../../constants/styles';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 120px;
left: 250px;
width: 900px;
height: 600px;
  padding: 20px;
  z-index: 500;
  background-color: white;
  border: 1px solid grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 10px
  transition: all 0.3s ease-out;
`;

export const Title = styled.div`
  padding-bottom: ${spacing.md};
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ isStrong }) => (isStrong ? 'font-weight: bold;' : '')};
  text-decoration: ${({ textDecor }) => (textDecor ? 'underline' : '')};
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.sm};
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${spacing.md};
  flex-direction: row;
`;
export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: ${spacing.xxl};
`;

export default {
  ModalWrapper,
  InputRow,
  Title,
  RowContainer,
  ButtonWrapper,
};
