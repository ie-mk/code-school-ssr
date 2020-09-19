import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 3%;
`;

const Title = styled.div`
  margin: 22px 0 12px;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
`;

const Descr = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export default {
  Wrapper,
  Title,
  Descr,
};
