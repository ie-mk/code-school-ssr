import styled from 'styled-components';
import { aboveTabletLarge } from '../foundation/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/img/new/Signup_Image-min.png');
  background-size: cover;
  padding: 50px;
`;

const Content = styled.div`
  max-width: 900px;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  text-align: center;
  ${aboveTabletLarge`
    font-size: 48px;
  `}
`;

export default {
  Wrapper,
  Content,
  Title,
};
