import React, { useEffect } from 'react';
import CourseDescription from '../courseDesctiption/CourseDescription';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import {
  getEditableCourseData,
  getCourseChapters,
} from '../../../../../store/selectors';
import Button from '../../../../foundation/button/Button';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SpinnerLarge from '../../../../foundation/spinner/SpinnerLarge';

const AddNewCourse = ({ dispatch, courseData, loading }) => {
  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request());
  }, []);

  const handleCreateNewChapter = () => {
    dispatch(resourceActions.createChapter.request());
  };

  const chapters = courseData.chapters;

  return (
    <ContainerBase>
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
});

export default connect(mapStateToProps)(AddNewCourse);
