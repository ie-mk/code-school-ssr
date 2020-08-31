import styled from 'styled-components';
import { colors, spacing } from '../../constants/styles';
import media from '../foundation/media';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.belowTabletLarge`
    width: 100%;
    flex-direction: column;
  `}

  i {
    font-size: 20px;
  }
  select {
    background-color: #e8edf1;
    font-weight: bold;
    font-size: 13px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  max-width: 1400px;
  padding: 45px;
  padding-right: ${spacing.lg};
  position: absolute;
  z-index: 8;
  ${media.belowTabletLarge`
    padding: 11px;
  `}
`;

const LinkWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin-right: ${spacing.xl};
  transition: all 0.7s ease-in;
  ${media.belowTabletLarge`
    height: ${({ showMobileMenu }) => (showMobileMenu ? 'auto' : '0')};
    overflow: hidden;
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 0;
    margin-right: 0;
    padding: ${({ showMobileMenu }) =>
      showMobileMenu ? '50px 0 40px 0' : '0'};
    left: 0;
    background: transparent linear-gradient(180deg, #222A48 0%, #191F37 100%) 0% 0% no-repeat padding-box;
  `}
`;

const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 40px 20px;
  font-size: 50px;
  color: ${colors.white};
  ${media.aboveTabletLarge`
    display: none;
  `}

  ${media.belowTabletLarge`
    padding: 10px 20px 0;
    font-size: 32px;
  `}
  i {
    cursor: pointer;
  }
`;

export default {
  Wrapper,
  LoginWrapper,
  LinkWrapper,
  MobileMenuWrapper,
};
