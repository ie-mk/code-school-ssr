import styled from 'styled-components';
import { aboveTabletLarge } from '../foundation/media';

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${aboveTabletLarge`
    width: 30%;
    margin-right: 3%;
  `}
  margin-bottom: 50px;
`;

const CardText = styled.div`
  font-size: 16px;
  font-weight: 100;
  max-width: 300px;
  margin-bottom: 30px;
  text-align: center;
`;

export default {
  Wrapper,
  CardWrapper,
  CardText,
};
