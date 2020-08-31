import styled from 'styled-components';
import media from '../../foundation/media';
import { colors, spacing } from '../../../constants/styles';

export const NoteWrapper = styled.div`
  display: flex;
  margin: 65px 0 0 0;
  ${media.belowTabletLarge`
margin:35px 0 0 0;
`}
`;

export const AssignmentWrapper = styled.div`
  text-decoration: underline;
  color: #0ec9b0;
  font-size: 36px;
  font-style: Italic;
`;

export const AskWrapper = styled.div`
  text-decoration: underline;
  color: #0ec9b0;
  font-size: 24px;
`;

export const Lesson = styled.div`
  margin: 57px 0 0 0;
  ${media.belowTabletLarge`
  margin: 25px 0 0 0;
  
  `}
`;

export const LessonMoveWrapper = styled.div`
  display: flex;
  align-items: center;
  i {
    color: #0ec9b0;
  }
`;

const ViewLessonWrapper = styled.div`
  margin: 46px 0 27px 0;
  ${media.aboveTabletLarge`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 93px 0 54px 0;
  `}
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChapterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 70px 0 44px 0;

  ${media.belowTabletLarge`
   margin:50px 0 22px 19px;
   `}
`;

const MobileVideoWrapper = styled.div`
  ${media.aboveTabletLarge`
      display:none;
   `}
`;
const DesktopVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 40%;

  video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  ${media.belowTabletLarge`
      
   `}
`;

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 59px 0 44px 44px;
  i {
    color: #0ec9b0;
  }
`;

const LessonContent = styled.div`
  ${media.aboveTabletLarge`
  margin: 0 0 0 20px;
   `}
`;
const CheckBox = styled.input`
  width: 28px;
  height: 28px;

  ${media.belowTabletLarge`
   width: 14px;
      height: 14px;
     `}
`;

const ContentWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const ViewCourseHomeWrapper = styled.div`
  position: relative;
  margin-right: ${spacing.xxxxl};
  width: ${({ open }) => (open ? '400px' : 0)};
  display: flex;
  transition: all 0.5s ease-in;
  justify-content: center;
  z-index: 1;
  overflow: hidden;

  ${media.belowTabletLarge`
    position: absolute;
    margin-right: 0;
    width: ${({ open }) => (open ? '400px' : 0)};
    left:-70px;
  `}
`;

export const MenuShowWrapper = styled.div`
  position: absolute;
  top: 300px;
  left: -83px;
  background: transparent linear-gradient(180deg, #2385d9 0%, #0ec9b0 100%) 0%
    0% no-repeat padding-box;
  width: 49px;
  height: 70px;
  border-radius: 0 20px 20px 0;
  padding: 10px;
  transition: all 0.5s ease-in;
  z-index: 1;

  ${media.belowTabletLarge`
     margin-top: 0;
     top: 150px;
     left: ${({ open }) => (open ? '267px' : '-35px')};
     width: 30px;
  height: 60px;
  border-radius: 0 10px 10px 0;
  padding:5px;
  
  `}
`;

export const CourseHome = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: ${({ open }) => (open ? 'auto' : '0')};
  padding: 57px 30px 81px 91px;
  background-color: #1e2540;
  border-radius: 10px;
  transition: all 0.5s ease-in;
  ${media.belowTabletLarge`
  padding: 30px 30px 41px 46px;
  
  `}
`;

export default {
  ContentWrapper,
  RowContainer,
  CourseHome,
  CheckBox,
  ChapterWrapper,
  LessonWrapper,
  Lesson,
  AssignmentWrapper,
  AskWrapper,
  LessonMoveWrapper,
  MenuShowWrapper,
  LessonContent,
  MobileVideoWrapper,
  DesktopVideoWrapper,
  ViewLessonWrapper,
  ViewCourseHomeWrapper,
  NoteWrapper,
};
