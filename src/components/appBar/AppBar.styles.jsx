import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  i {
    font-size: 20px;
  }
  select {
    background-color: #e8edf1;
    font-weight: bold;
    font-size: 13px;
  }
  button {
    height: 36px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
`;

export default {
  LoginWrapper,
  LinkWrapper,
};
