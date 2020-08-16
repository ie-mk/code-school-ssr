import styled from 'styled-components';
import media from '../../../../foundation/media';

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 59px 0 44px 44px;
  i {
    color: #0ec9b0;
  }
`;

const ChapterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 70px 0 44px 0;

  ${media.belowTabletLarge`
   margin:50px 0 22px 19px;
   `}
`;

export default {
  ChapterWrapper,
  LessonWrapper,
};
