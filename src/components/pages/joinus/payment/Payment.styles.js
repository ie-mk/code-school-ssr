import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../../constants/styles';
import media from '../../../foundation/media';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 600px;
  align-items: center;
  margin-top: ${spacing.xxxl};
  ${media.belowMobileLarge`
    justify-content: center;
    margin-top: ${spacing.xl};
  `}
`;

const RadioButtonLabel = styled.label`
  font-size: ${spacing.xl};
  padding-left: ${spacing.sm};
  ${media.belowMobileLarge`
    font-size:${spacing.md};
  `}
`;

const Wrapper = styled.div`
  max-width: 600px;
  width: 600px;
  ${media.belowMobileLarge`
    max-width : 300px;
    width: 300px;
  `}
`;

const InputWrapper = styled.div`
  width: 250px;
  ${media.belowMobileLarge`
    max-width : 125px;
    width: 125px;
  `}
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  input[type='radio'] {
    width: 40px;
    height: 40px;
    margin-right: 40px;
  }
  margin-right: 40px;
  margin-top: 40px;
`;

const ImageWrapper = styled.div`
  background-color: ${colors.white};
  width: 307px;
  height: 127px;
  flex: 0;
  border-radius: 10px;
  padding: 15px;
  img {
    width: 270px;
    height: 90px;
    object-fit: cover;
  }
  ${media.belowMobileLarge`
  width: 180px;
  height: 70px;
  img {
    width: 150px;
    height: 30px;
   }
    `}
`;

const ExpiryDateCVVContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  ${media.belowMobileLarge`
    width: 300px;
  `}
`;

export default {
  ButtonWrapper,
  RadioButtonLabel,
  Wrapper,
  InputWrapper,
  RowContainer,
  ImageWrapper,
  ExpiryDateCVVContainer,
};
