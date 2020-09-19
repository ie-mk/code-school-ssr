import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../constants/styles';
import media, { aboveTabletLarge } from '../../foundation/media';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1800px;
  z-index: 1;
  background: transparent linear-gradient(180deg, #2386d9d8 0%, #000000bc 100%);

  ${aboveTabletLarge`
    background: none;
  `}
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;

  ${media.aboveTabletLarge`
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 30px;
  `}
`;

const TextLine = styled.span`
  background-color: black;
  color: white;
  font-size: 48px;
  margin-bottom: 2px;
  text-align: left;
  padding: 0 10px;
  float: left;
  ${media.belowTabletLarge`
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0;
    font-size: 34px;
  `}
`;

const SignupContainer = styled.div`
  align-items: flex-start;
  margin-left: 0;
  font-size: 34px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 30px;

  ${media.aboveTabletLarge`
    align-items: center;
    max-width: 663px;
    margin-right: 30px;
    margin-bottom: 50px;
    padding: 60px;
    background: transparent linear-gradient(180deg, #2386d9d8 0%, #000000bc 100%);
  `}
`;

const TextContainer = styled.div`
  float: right;
  max-width: 650px;
`;

const SpamNotice = styled.div`
  margin-top: 20px;
  font-size: 12px;
  width: 100%;
  text-align: center;
  ${aboveTabletLarge`
    font-size: 16px;
     margin-top: 30px;
  `}
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
  TextWrapper,
  TextLine,
  SignupContainer,
  TextContainer,
  SpamNotice,
};
