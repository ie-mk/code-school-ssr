import styled from 'styled-components';
import media from '../../foundation/media';
import { borderRadius, spacing, fontSizeMap } from '../../../constants/styles';

const RowContainer = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
`;

const ViewWrapper = styled.div`
  margin: 12px 0 0 20px;
  ${media.aboveTabletLarge`
margin: 24px 0 0 48px;
`}
`;

export const PhoneInputStyles = styled.div`
  padding-left: ${spacing.sm};

  .PhoneInput {
    height: 40px;
  }
  .PhoneInputInput {
    height: 50px;
    opacity: 1;
    padding-left: 10px;
    font-size: ${fontSizeMap.h4};
    background-color: #293150;
    color: white;
    border-radius: ${borderRadius.sm};

    ${media.belowTabletLarge`
    height: 44px;

    font-size: ${fontSizeMap.textS};
`}
  }
  .PhoneInputInput:focus {
    outline: none;
  }
`;
export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.md};
  font-size: ${fontSizeMap.h6};
  ${media.belowTabletLarge`
  font-size: ${fontSizeMap.textS};
  padding-bottom: ${spacing.sm};
`}
`;

export const Container = styled.div`
  width: 600px;
  ${media.belowTabletLarge`
    width:300px;
`}
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.sm};

  align-items: center;
  .name-input {
    background-color: #293150;
    color: white;
    padding-left: ${spacing.sm};
    width: 600px;
    font-size: ${fontSizeMap.text};
    height: 50px;
    border-radius: ${borderRadius.sm};

    ${media.belowTabletLarge`
   width: 300px;

     `}
  }
`;

const EmailLabel = styled.div`
  font-size: ${fontSizeMap.h6};
  margin-top: ${spacing.md};
  ${media.belowTabletLarge`
    font-size:${fontSizeMap.textS};

     `}
`;

const CheckBox = styled.input`
  width: 70px;
  height: 28px;

  ${media.belowTabletLarge`
   width: 50px;
      height: 14px;
     `}
`;

const CheckBoxItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  margin-top: 22px;

  ${media.belowTabletLarge`
  margin-top:22px;
   width:300px;
   `}
`;
export default {
  RowContainer,
  ViewWrapper,
  PhoneInputStyles,
  Label,
  InputRow,
  Container,
  CheckBoxItemWrapper,
  CheckBox,
  EmailLabel,
};
