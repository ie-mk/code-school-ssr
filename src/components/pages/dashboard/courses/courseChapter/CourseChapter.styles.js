import styled from 'styled-components';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../../constants/styles';

export const Title = styled.div`
  padding-bottom: ${spacing.md};
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ isStrong }) => (isStrong ? 'font-weight: bold;' : '')};
  text-decoration: ${({ textDecor }) => (textDecor ? 'underline' : '')};
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.sm};
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${spacing.xxxxl};
  flex-direction: row;
`;

const ChapterHeader = styled.label`
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid #909090;
  font-size: ${fontSizeMap.text};
  font-weight: bold;
  color: ${colors.white};
  border-radius: ${borderRadius.sm};
  background-color: #191f37;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacing.sm};
`;

export const MidContainer = styled.div`
  flex: 1;
  display: flex;
  //justify-content: space-between;
  //padding-bottom: ${spacing.sm};
  //align-items: center;
  width: 100%;
  height: 500px;
  margin-top: ${spacing.xxl};
  background: #D3D3D326 0% 0% no-repeat padding-box;
`;

export const AddLesson = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: ${spacing.xxl};
  padding-left: ${spacing.xl};
  //padding-top: ${spacing.xl};
  flex-direction: column;
`;

export const LessonFormContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-right: ${spacing.xl};
  padding-left: ${spacing.xl};
`;
const Upload = styled.div`
    width: ${({ width }) => width || '30%'};
   // width: 30%;
    height: 40px;
    border: 1px solid #909090;
    font-size: ${fontSizeMap.text};
    color:${colors.black};
    border-radius: ${borderRadius.sm};
    opacity: 1;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-top: ${({ marginTop }) => spacing[marginTop] || ''};
    margin-right:${spacing.sm};
    //padding:${spacing.sm};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LessonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${spacing.xxl};
`;

export const Label = styled.label`
  font-size: ${fontSizeMap.h5};
`;

export const AddNewWrapper = styled.div`
  display: flex;
  margin-top: ${spacing.xl};
  justify-content: center;
`;

const Wrapper = styled.div`
  //
`;

const DeleteChapterButton = styled.a`
  position: absolute;
  right: 0;
  font-size: ${fontSizeMap.textMobile};
  color: white;
  margin-right: ${spacing.sm};
  cursor: pointer;
`;

const ExpandButton = styled.span`
  display: inline-block;
  position: absolute;
  left: 20px;
  font-size: 28px;
`;

const Content = styled.div`
  height: ${({ expanded }) => (expanded ? 'auto' : 0)};
  overflow: hidden;
  transition: all 0.5s ease-in;
  padding-bottom: ${({ expanded }) => (expanded ? spacing.xxxxl : 0)};
`;

export default {
  InputRow,
  Title,
  RowContainer,
  ChapterHeader,
  MidContainer,
  AddLesson,
  LessonFormContainer,
  Upload,
  Row,
  Label,
  LessonContainer,
  AddNewWrapper,
  Wrapper,
  DeleteChapterButton,
  ExpandButton,
  Content,
};
