import styled from 'styled-components';
import media from '../../../foundation/media';

const RowContainer = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
`;

const ViewWrapper = styled.div`
  margin: 12px 0 0 20px;
  ${media.aboveTabletLarge`
margin: 24px 0 0 48px;
`}
`;

export default {
  RowContainer,
  ViewWrapper,
};
