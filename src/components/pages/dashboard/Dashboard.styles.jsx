import styled from 'styled-components';
import { colors, dashboard } from '../../../constants/styles';

const Wrapper = styled.div`
  min-height: calc(100vh - 915px);
  background-color: ${dashboard.dashboardBackground};
  color: ${colors.black};
`;

const MenuWrapper = styled.div`
  height: 100vh;
  background: transparent linear-gradient(180deg, #1a2036 0%, #191f37 100%) 0%
    0% no-repeat padding-box;
  color: ${colors.white};
`;

export default {
  Wrapper,
  MenuWrapper,
};
