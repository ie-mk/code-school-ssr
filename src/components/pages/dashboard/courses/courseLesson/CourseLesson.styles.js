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
  width: 100%;
  height: 40px;
  border: 1px solid #909090;
  font-size: ${fontSizeMap.text};
  font-weight: bold;
  color: ${colors.white};
  border-radius: ${borderRadius.sm};
  background-color: ${colors.black};
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacing.xxl};
`;

export const LessonContent = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  form {
    flex: 1;
  }
`;

export const AddLesson = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: ${spacing.xxl};
  padding-left: ${spacing.xl};
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
    margin-left:${spacing.sm};
    //padding:${spacing.sm};
    cursor:pointer;
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

const Wrapper = styled.div`
  background-color: #d3d3d326;
  margin-top: ${spacing.lg};
`;

const LessonNumber = styled.span`
  display: flex;
  align-items: center;
  font-size: ${fontSizeMap.h4s};
  font-weight: ${({ editing }) => (editing ? 'bold' : 'normal')};
  cursor: pointer;

  input {
    margin-right: ${spacing.md};
    width: 28px;
    height: 28px;
  }
`;

export default {
  InputRow,
  Title,
  RowContainer,
  ChapterHeader,
  LessonContent,
  AddLesson,
  LessonFormContainer,
  Upload,
  Row,
  Label,
  LessonContainer,
  Wrapper,
  LessonNumber,
};
