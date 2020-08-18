import React, { useEffect } from 'react';
import CourseDescription from '../courseDesctiption/CourseDescription';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import {
  getEditableCourseData,
  getEditingCourseId,
} from '../../../../../store/selectors';
import Button from '../../../../foundation/button/Button';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SpinnerLarge from '../../../../foundation/spinner/SpinnerLarge';

const EditCourse = ({ dispatch, courseId, courseData, loading }) => {
  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request(courseId));
  }, []);

  const chapters = courseData && courseData.chapters;
  const editedOnDate = courseData && courseData.editedOnDate;

  const handleCreateNewChapter = () => {
    dispatch(
      resourceActions.createChapter.request({
        sequenceNr: Object.keys(chapters).length + 1,
      }),
    );
  };

  return (
    <ContainerBase key={editedOnDate}>
      {loading && <SpinnerLarge />}
      <CourseDescription />
      {chapters &&
        Object.keys(chapters)
          .sort(
            (a, b) => chapters[a].sequenceNr - (chapters[b].sequenceNr || 999),
          )
          .map((chapterId, idx) => {
            const data = chapters[chapterId];
            return (
              <CourseChapter
                key={chapterId}
                courseId={courseId}
                chapterId={chapterId}
                data={data}
                idx={idx}
              />
            );
          })}
      <CenteredFlexContainer margin="lg">
        <Button type="primary" size="lg" onClick={handleCreateNewChapter}>
          Add New Chapter
        </Button>
      </CenteredFlexContainer>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  courseData: getEditableCourseData(state),
  loading: state.courses.loading,
  courseId: getEditingCourseId(state),
});

export default connect(mapStateToProps)(EditCourse);
