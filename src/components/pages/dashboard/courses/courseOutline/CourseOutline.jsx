import React, { useEffect } from 'react';
import Styled from './CourseOutline.styles';
import ContainerBase from '../../../../foundation/ContainerBase';
import { connect } from 'react-redux';
import ChapterContent from '../chapterContent/ChapterContent';

const CourseOutline = ({ chapters, courseId }) => {
  return (
    <Styled.Wrapper>
      <Styled.StyledHeader>Course Outline</Styled.StyledHeader>
      <ContainerBase marginTop="xl">
        {chapters &&
          Object.keys(chapters)
            .reverse()
            .map((chapterId, i) => {
              return (
                <ChapterContent
                  key={chapterId}
                  chapterId={chapterId}
                  courseId={courseId}
                  chapters={chapters}
                />
              );
            })}
      </ContainerBase>
    </Styled.Wrapper>
  );
};

export default connect()(CourseOutline);
