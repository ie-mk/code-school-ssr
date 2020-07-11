import styled from 'styled-components';
import { colors, spacing } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${spacing.lg};
  font-weight: 400;
  border-bottom: 1px solid ${colors.primary};
  ${media.belowTabletLarge`
    padding: ${spacing.xxxS};
  `}
`;

const ItemsContainer = styled.div`
  padding-left: ${spacing.xl};
  padding-right: ${spacing.xl};
  background: ${colors.background.violetsecondary};
  border-radius: ${spacing.sm};
  div: last-child {
    border-bottom: 0;
  }
`;

const Wrapper = styled.div``;

export default {
  ContentWrapper,
  ItemsContainer,
  Wrapper,
};
