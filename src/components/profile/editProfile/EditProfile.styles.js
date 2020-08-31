import styled from 'styled-components';
import media from '../../foundation/media';
import { borderRadius, spacing, fontSizeMap } from '../../../constants/styles';

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  ${media.belowTabletLarge`
    width: 125px;
    height: 125px;
  `}
`;

export const ProfileWrapper = styled.div`
  justify-content: center;
  ${media.belowTabletLarge`
   margin:auto;
   align-items:center;
  `}
`;

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

const BackButtonContainer = styled.div`
  position: absolute;
  left: ${spacing.xl};
  top: 0;
  ${media.belowTabletLarge`
    top: -50px;
    left: 0;
  `}
`;

export const PhoneInputStyles = styled.div`
  padding-left: ${spacing.sm};

  .PhoneInput {
    height: 40px;
  }
  .PhoneInputInput {
    height: 60px;
    opacity: 1;
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
  padding-bottom: ${spacing.sm};
  font-size: ${fontSizeMap.h4};
  ${media.belowTabletLarge`
  font-size: ${fontSizeMap.textS};
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
`;

export default {
  ProfileWrapper,
  Image,
  RowContainer,
  ViewWrapper,
  BackButtonContainer,
  PhoneInputStyles,
  Label,
  InputRow,
  Container,
};
