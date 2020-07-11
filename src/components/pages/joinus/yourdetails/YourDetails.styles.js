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
  align-items: center;
  margin-top: ${spacing.xxxl};
  ${media.belowMobileLarge`
    justify-content: center;
    margin-top: ${spacing.xl};
    flex-direction: row;
  `}
`;

const CheckBox = styled.input`
  width: ${spacing.xl};
  height: ${spacing.xl};
  margin-right: ${spacing.xl};
  border-radius: 20px;
  ${media.belowMobileLarge`
    width: ${spacing.md}; 
    height: ${spacing.md};
    margin-right: ${spacing.md};
  `}
`;

const CheckBoxLabel = styled.label`
  font-size: ${spacing.xl};
  ${media.belowMobileLarge`
    font-size:${spacing.md};
  `}
`;

const CheckBoxLinkLabel = styled.label`
  font-size: ${spacing.xl};
  text-decoration: underline;
  color: ${colors.bluishgreen};
  padding-left: ${spacing.sm};
  cursor: pointer;
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

export default {
  ButtonWrapper,
  CheckBox,
  CheckBoxLabel,
  CheckBoxLinkLabel,
  Wrapper,
};
