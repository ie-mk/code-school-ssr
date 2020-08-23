import React, { useEffect } from 'react';
import Text24 from '../../../../foundation/typography/Text24';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import Styled from './CourseHomeChapters.styles';
import Text18 from '../../../../foundation/typography/Text18';

const CustomText18 = props => (
  <Text18
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 0 12px',
      },
    }}
    {...props}
  />
);

const CourseHomeChapters = ({
  dispatch,
  chapterId,
  chapters,
  courseId,
  activeLessonIdx,
  setActiveLessonIdx,
  setActiveChapterIdx,
  activeChapterIdx,
  chapterIdx,
}) => {
  const chapter = chapters[chapterId];
  const title = chapter && chapter.title;

  useEffect(() => {
    dispatch(
      resourceActions.fetchLessons.request({
        courseId,
        chapterId,
      }),
    );
  }, [chapterId]);

  const lessons = chapter.lessons;

  return (
    <>
      <Styled.ChapterWrapper>
        {/*<i className="fa fa-circle fa-2x" aria-hidden="true" />*/}
        <CustomText18 margin="0 0 0 10px" text={title} />
      </Styled.ChapterWrapper>

      {lessons &&
        Object.keys(lessons)
          .sort((a, b) => lessons[a].sequenceNr - lessons[b].sequenceNr)
          .map((lessonId, idx) => {
            const lesson = lessons && lessons[lessonId];

            if (!lesson) return null;
            const lessonTitle = lesson.title;

            const active =
              activeChapterIdx === chapterIdx && activeLessonIdx === idx;

            return (
              <Styled.LessonWrapper
                key={lessonId}
                onClick={() => {
                  setActiveChapterIdx(chapterIdx);
                  setActiveLessonIdx(idx);
                }}
                active={active}
              >
                <i className="fa fa-check-circle fa-2x" aria-hidden="true" />
                <CustomText18 margin="0 0 0 20px" text={lessonTitle} />
              </Styled.LessonWrapper>
            );
          })}
    </>
  );
};

export default connect()(CourseHomeChapters);
