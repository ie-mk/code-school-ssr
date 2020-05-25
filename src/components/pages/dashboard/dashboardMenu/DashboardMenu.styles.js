import styled from 'styled-components';
import { spacing, dashboard } from '../../../../constants/styles';

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacing.sm};
  padding-left: ${spacing.xl};

  background-color: ${({ active }) =>
    active ? dashboard.activeMenuItemBackground : ''};

  box-shadow: ${({ active }) => (active ? dashboard.activeMenuItemShadow : '')};

  i {
    padding-right: ${spacing.md};
  }
`;
//   box-shadow: inset 4px 0 0 0 ${dashboard.activeMenuItemShadow};
// box-shadow: ${({ active }) =>
// active ? 'inset 4px 0 4px -4px' + ${dashboard.activeMenuItemShadow} : ''}

export const Label = styled.label`
  font-weight: bold;
  padding-left: ${spacing.md};
`;

export const Wrapper = styled.div``;

export default {
  Wrapper,
  MenuItem,
  Label,
};
