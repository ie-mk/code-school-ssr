import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH, LEVEL } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';
import CoursesLevel from '../../components/pages/dashboard/courses/coursesLevel/CoursesLevel';

const Path = ({ dispatch, courses, learningPaths }) => {
  const {
    query: { learningPathId },
  } = useRouter();

  const learningPathData = learningPaths[learningPathId];

  const title = learningPathData && learningPathData.title;

  useEffect(() => {
    if (!learningPathData) {
      dispatch(resourceActions.fetchLearningPaths.request());
    }
  }, [learningPathData]);

  useEffect(() => {
    dispatch(resourceActions.resetCourses());
    if (title) {
      dispatch(
        resourceActions.fetchCourses.request({
          queries: {
            learningPath: ['==', title],
          },
        }),
      );
    }
  }, [title]);

  let heading = LEARNING_PATH[title] + ' Learning Path';
  heading = heading.toUpperCase();

  if (!learningPathData) return null;

  return (
    <ErrorBoundary>
      <>
        <CoursesLearningPath title={heading} descr={learningPathData.descr} />

        <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
          {
            <CoursesLevel
              courses={courses}
              learningPathData={learningPathData}
            />
          }
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
  learningPaths: getLearningPaths(state),
});

export default connect(mapStateToProps)(Path);
