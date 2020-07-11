import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};

  ${media.belowTabletLarge`
    height: auto;
  `}
`;

const ItemsWrapper = styled.div`
  margin-bottom: ${spacing.xls};
`;

const FootWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-top: ${spacing.xxl};
  font-size: ${fontSizeMap.h3};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 250px 5% 250px 1%;
  padding-top: 50px;
  width: 100%;
  z-index: 1;

  ${media.belowTabletLarge`
    margin: 70px;
  `}
`;

export default {
  Wrapper,
  ItemsWrapper,
  FootWrapper,
  Content,
};
