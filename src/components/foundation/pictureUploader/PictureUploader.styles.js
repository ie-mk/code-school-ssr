import styled from 'styled-components';
import { spacing, borderRadius } from '../../../constants/styles';
//import Button from '../button/Button';

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
`;

// export const CustomButton = styled(Button)`
//   border-radius: ${borderRadius.md};
//   width: 150px;
//   margin-right: 20px;
// `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${({ width }) => width || 'auto'};
`;

export default {
  ButtonWrapper,
  Wrapper,
};
