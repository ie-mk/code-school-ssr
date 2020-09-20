import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/img/new/Video_Thumbnail_01.png');
  background-size: cover;
  padding: 50px;
`;

const Content = styled.div`
  max-width: 900px;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 48px;
  margin: 0;
  text-align: center;
`;

export default {
  Wrapper,
  Content,
  Title,
};
