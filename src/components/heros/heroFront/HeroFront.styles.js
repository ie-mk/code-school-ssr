import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../constants/styles';
import media from '../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};
`;

const Content = styled.div`
  max-width: 1800px;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${media.aboveTablet`
    justify-content: space-around;
    margin-top: ${spacing.xxxl};
    flex-direction: row;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 30px 40px;
  text-align: center;
`;

const TextLine = styled.div`
  background-color: black;
  color: white;
  font-size: 48px;
  margin-bottom: 2px;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  max-width: 663px;
  background: transparent linear-gradient(180deg, #2386d9d8 0%, #000000bc 100%);
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
  TextWrapper,
  TextLine,
  SignupContainer,
};
