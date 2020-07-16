import styled from 'styled-components';
import media from '../../foundation/media';
import { colors, spacing } from '../../../constants/styles';

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

export default {
  ProfileWrapper,
  Image,
  RowContainer,
  ViewWrapper,
};
