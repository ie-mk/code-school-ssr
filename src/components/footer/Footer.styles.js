import styled from 'styled-components';
import { fontSizeMap, colors, spacing } from '../../constants/styles';
import { lightenDarkenColor } from '../../utils/colors';

const Wrapper = styled.div`
  display: flex;
  color: ${colors.white};
  width: 100%;
  height: 250px;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 15%;
`;

const Address = styled.div`
  font-size: ${fontSizeMap.title4};
  margin-top: ${spacing.xl};
`;

const Header = styled.header`
  font-size: ${fontSizeMap.title2};
  margin-bottom: ${spacing.lg};
`;

const Social = styled.div`
  display: flex;
`;

const Line = styled.div`
  margin-bottom: ${spacing.xS};
`;

export default {
  Wrapper,
  Column,
  Address,
  Header,
  Social,
  Line,
};
