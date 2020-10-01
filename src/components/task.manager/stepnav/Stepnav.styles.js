import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #f5f5f5;
  border-bottom: 1px solid #dfdfdf;
  padding: 10px;
`;

const Step = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 9px;
  background-color: ${({ active }) => (active ? 'white' : '')};
  background-color: ${({ control, add }) =>
    control ? (control && add ? 'lightgreen' : 'red') : ''};
  margin-left: ${({ control, add }) => (control && add ? '10px' : '1px')};
`;

const Button = styled.button`
  height: 25px;
  width: 65px;
  text-align: center;
  font-family: inherit;
  border: 1px solid #07529d;
  color: #07529d;
  background-color: white;
  font-size: 10px;
  font-weight: 700;
`;

const StepsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  Wrapper,
  Button,
  Step,
  StepsWrapper,
};
