import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../constants/styles';

const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ active }) => (active ? 'font-weight: bold;' : '')};
  text-decoration: ${({ active }) => (active ? 'underline' : '')};
  cursor: pointer;
`;

export default {
  Wrapper,
  Title,
};
