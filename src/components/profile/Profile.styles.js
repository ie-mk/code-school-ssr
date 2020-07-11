import styled from 'styled-components';

import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../constants/styles';
import media from '../foundation/media';

export const ProfileWrapper = styled.div`
  display: flex;
  background-color: #2385d92b;
  padding: 86px 90px 86px 165px;
  ${media.belowTabletLarge`
    padding: 42px 20px;
  `}
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  ${media.belowTabletLarge`
    width: 100px;
    height: 100px;
  `}
`;
export const ProfileInfoPageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2385d92b;
  opacity: 0.4;
  padding: 43px 278px 36px 298px;
  ${media.belowTabletLarge`
   padding:33px 20px 30px 20px;
`}
`;

export const ShowDesktopOnly = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  ${media.belowTabletLarge`
    display: none;
  `}
`;

export const ShowMobileOnly = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.aboveTabletLarge`
    display: none;
  `}
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .mobileView {
      ${media.aboveTabletLarge`
        display: none;
      `}
    }
  }
`;
export const DetailsWrapper = styled.div`
  margin-left: 30px;

  ${media.aboveTabletLarge`
    margin-left: 50px;
  `}

  i {
    font-size: ${fontSizeMap.h4m};
    padding-right: ${spacing.md};
  }
`;

export const Tab = styled.div`
  cursor: pointer;
  color: ${({ activeTab }) => (activeTab ? '#0EC9B0' : 'white')};
  text-decoration: ${({ activeTab }) => (activeTab ? 'underline' : '')};
`;
export const SocialImage = styled.img`
  margin-right: 15px;

  ${media.belowTabletLarge`
    height: 17px;
    width: 17px;
  `}
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export default {
  ProfileDetails,
  Image,
  ProfileWrapper,
  ProfileInfoPageWrapper,
  ShowDesktopOnly,
  ShowMobileOnly,
  ImageWrapper,
  DetailsWrapper,
  Tab,
  SocialImage,
};
