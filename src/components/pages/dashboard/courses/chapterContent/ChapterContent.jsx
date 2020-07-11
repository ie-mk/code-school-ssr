import React, { useEffect } from 'react';
import Styled from './ChapterContent.styles';
import CollapseContainer from '../../../../foundation/collapseContainer';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';

const ChapterContent = ({ dispatch, chapterId, chapters, courseId }) => {
  const chapter = chapters[chapterId];
  const title = 'Chapter ' + chapter.sequenceNr + ' : ' + chapter.title;

  useEffect(() => {
    dispatch(
      resourceActions.fetchLessons.request({
        courseId,
        chapterId,
      }),
    );
  }, []);

  const lessons = chapter.lessons;

  return (
    <Styled.Wrapper>
      <CollapseContainer title={title} isCollapsed={true}>
        <Styled.ItemsContainer>
          {lessons &&
            Object.keys(lessons).map((lessonId, i) => {
              const lesson = lessons && lessons[lessonId];
              if (!lesson) return null;
              const title =
                'Lesson ' + lesson.sequenceNr + ' : ' + lesson.title;
              return (
                <Styled.ContentWrapper key={i}>
                  <div>{title}</div>
                  <div>{lesson.videoLink}</div>
                </Styled.ContentWrapper>
              );
            })}
        </Styled.ItemsContainer>
      </CollapseContainer>
    </Styled.Wrapper>
  );
};

export default connect()(ChapterContent);
