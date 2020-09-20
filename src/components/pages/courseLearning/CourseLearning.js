import React, { useState, useEffect, useMemo } from 'react';
import SectionTitle from '../../foundation/typography/SectionTitle';
import CardTitle from '../../foundation/typography/CardTitle';
import { connect } from 'react-redux';
import Text18 from '../../foundation/typography/Text18';
import Styled from './CourseLearning.styles';
import FlexContainer from '../../foundation/FlexContainer';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import { resourceActions } from '../../../store/actions';
// import CollapseContainer from '../../foundation/collapseContainer';
import needsLoginWrapper from '../../../utils/needsLoginWrapper';
import {
  getChaptersByCourseId,
  getLessonsByChapterId,
} from '../../../store/selectors';
import CourseHomeChapters from '../dashboard/courses/courseHomeChapters/courseHomeChapters';

// var questions = [
//   'Does these courses need any special requirements?',
//   'Who are the authors of these courses?',
//   'Is it possible to pay by instalments?',
//   'Can I start an internship after I finish the course?',
//   'What should I do after I finish the course?',
// ];

const CourseLearning = ({
  courseId,
  dispatch,
  course,
  chaptersByCourse,
  lessonsByChapter,
}) => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (!course) {
      dispatch(resourceActions.fetchCourse.request(courseId));
    }
  }, [courseId, course]);

  useEffect(() => {
    if (course && !course.chapters) {
      dispatch(resourceActions.fetchChapters.request(courseId));
    }
  }, [courseId, course]);

  const chapters = chaptersByCourse[courseId] || {};

  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(null);

  const chaptersArr = useMemo(() => {
    return Object.keys(chapters).map(key => {
      const chapterClone = { ...chapters[key] };
      chapterClone.id = key;

      return chapterClone;
    });
    // .sort((a, b) => a.sequenceNr - b.sequenceNr);
  }, [chapters]);

  const activeChapterLessons =
    lessonsByChapter[Object.keys(chapters)[activeChapterIdx]];

  const lessonsArr = useMemo(() => {
    if (!activeChapterLessons) return null;

    return Object.keys(activeChapterLessons).map(lessonId => {
      const lessonsClone = { ...activeChapterLessons[lessonId] };
      lessonsClone.id = lessonId;

      return lessonsClone;
    });
    // .sort((a, b) => a.sequenceNr - b.sequenceNr);
  }, [activeChapterIdx, chaptersArr, chapters, activeChapterLessons]);

  useEffect(() => {
    if (!activeLessonIdx && lessonsArr && lessonsArr.length) {
      setActiveLessonIdx(0);
    }
  }, [lessonsArr]);

  if (!course) return null;

  const activeLesson =
    lessonsArr && activeLessonIdx !== null && lessonsArr[activeLessonIdx];

  return (
    <CenteredFlexContainer>
      <SectionTitle
        margin="50px 0 20px 0"
        mediaConfig={{
          belowTabletLarge: {
            margin: '20px 0 0 0',
          },
        }}
        text={course.title}
      />

      <FlexContainer>
        <div>
          <Styled.ViewCourseHomeWrapper open={menuOpen}>
            <Styled.CourseHome open={menuOpen}>
              <CardTitle text="Course Home" />
              {/* */}
              {chapters &&
                Object.keys(chapters)
                  .sort(
                    (a, b) =>
                      chapters[a].sequenceNr - (chapters[b].sequenceNr || 999),
                  )
                  .map((chapterId, idx) => {
                    return (
                      <CourseHomeChapters
                        key={chapterId}
                        chapterId={chapterId}
                        courseId={courseId}
                        chapters={chapters}
                        setActiveLessonIdx={setActiveLessonIdx}
                        activeLessonIdx={activeLessonIdx}
                        chapterIdx={idx}
                        setActiveChapterIdx={setActiveChapterIdx}
                        activeChapterIdx={activeChapterIdx}
                      />
                    );
                  })}
            </Styled.CourseHome>
          </Styled.ViewCourseHomeWrapper>
        </div>
        <Styled.ContentWrapper>
          <Styled.MenuShowWrapper
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <i className="fa fa-angle-left fa-4x" aria-hidden="true" />
            ) : (
              <i className="fa fa-angle-right fa-4x" aria-hidden="true" />
            )}
          </Styled.MenuShowWrapper>
          <Styled.Lesson>
            <CardTitle margin="0 0 0 0" text="Lesson Title" />
            <Styled.DesktopVideoWrapper>
              {activeLesson && activeLesson.videoLink ? (
                <iframe
                  width="100%"
                  height="400px"
                  src={activeLesson.videoLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : null}
            </Styled.DesktopVideoWrapper>
            <Styled.LessonContent>
              <CardTitle
                margin="76px 0 23px 0"
                mediaConfig={{
                  belowTabletLarge: {
                    margin: '38px 0 12px 0',
                  },
                }}
                text="What you will learn in this chapter"
              />
              <Text18 text={course.whatWillLearn} />
              {/*<CardTitle*/}
              {/*  margin="50px 0 29px 0"*/}
              {/*  mediaConfig={{*/}
              {/*    belowTabletLarge: {*/}
              {/*      margin: '25px 0 15px 0',*/}
              {/*    },*/}
              {/*  }}*/}
              {/*  text="Please complete the following assignment"*/}
              {/*/>*/}
              {/*<Styled.AssignmentWrapper>Assignment 03</Styled.AssignmentWrapper>*/}
              {/*<Styled.NoteWrapper>*/}
              {/*  <Text18 color="#0EC9B0" text="NOTE:" fontWeight="700" />*/}
              {/*  <Text18 text="Once the assignment is complete then only the lesson marked as finished." />*/}
              {/*</Styled.NoteWrapper>*/}
              {/*<Styled.ViewLessonWrapper>*/}
              {/*  <CardTitle*/}
              {/*    mediaConfig={{*/}
              {/*      belowTabletLarge: {*/}
              {/*        margin: '0 0 39px  0',*/}
              {/*      },*/}
              {/*    }}*/}
              {/*    text="Frequently Asked Questions"*/}
              {/*  />*/}
              {/*  <Styled.AskWrapper>Ask a question?</Styled.AskWrapper>*/}
              {/*</Styled.ViewLessonWrapper>*/}
            </Styled.LessonContent>
            {/*{questions.map((key, index) => (*/}
            {/*  <CollapseContainer*/}
            {/*    title={questions[index]}*/}
            {/*    isCollapsed={true}*/}
            {/*    key={index}*/}
            {/*  />*/}
            {/*))}*/}
            {/*<Styled.RowContainer>*/}
            {/*  <Styled.LessonMoveWrapper>*/}
            {/*    <i className="fa fa-angle-left fa-3x" aria-hidden="true" />*/}
            {/*    <PathTitle margin="0 0 0 20px" text="Lesson 02 : Title" />*/}
            {/*  </Styled.LessonMoveWrapper>*/}
            {/*  <Styled.LessonMoveWrapper>*/}
            {/*    <PathTitle margin="0 20px 0 0" text="Lesson 04 : Title" />*/}
            {/*    <i className="fa fa-angle-right fa-3x" aria-hidden="true" />*/}
            {/*  </Styled.LessonMoveWrapper>*/}
            {/*</Styled.RowContainer>*/}
          </Styled.Lesson>
        </Styled.ContentWrapper>
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

const mapStateToProps = state => ({
  chaptersByCourse: getChaptersByCourseId(state),
  lessonsByChapter: getLessonsByChapterId(state),
});

export default connect(mapStateToProps)(needsLoginWrapper(CourseLearning));
