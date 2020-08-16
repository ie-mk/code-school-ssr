import React, { useState, useEffect } from 'react';

import Text24 from '../../../../foundation/typography/Text24';
import { connect } from 'react-redux';

import Styled from './CourseHomeChapters.styles';

const CustomText241 = props => (
  <Text24
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 0 24px',
      },
    }}
    {...props}
  />
);

const CourseHomeChapters = ({ dispatch, chapterId, chapters, courseId }) => {
  const chapter = chapters[chapterId];
  const title = 'Chapter ' + chapter.sequenceNr + ' : ' + chapter.title;

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
        <i class="fa fa-circle fa-2x" aria-hidden="true" />
        <CustomText241 margin="0 0 0 20px" text={title} />
      </Styled.ChapterWrapper>

      {lessons &&
        Object.keys(lessons).map((lessonId, i) => {
          const lesson = lessons && lessons[lessonId];

          if (!lesson) return null;
          const lessonTitle =
            'Lesson ' + lesson.sequenceNr + ' : ' + lesson.title;

          return (
            <Styled.LessonWrapper key={i}>
              <i class="fa fa-check-circle fa-2x" aria-hidden="true" />
              <CustomText241 margin="0 0 0 20px" text={lessonTitle} />
            </Styled.LessonWrapper>
          );
        })}
    </>
  );
};

export default connect()(CourseHomeChapters);
