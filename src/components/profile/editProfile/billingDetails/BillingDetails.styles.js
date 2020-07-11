import styled from 'styled-components';
import media from '../../../foundation/media';

const RowContainer = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
`;
const ViewWraper = styled.div`
  ${media.aboveTabletLarge`
  margin:0 0 0 40px;
`}
`;

export default {
  RowContainer,
  ViewWraper,
};
