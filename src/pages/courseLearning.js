import React from 'react';
import CourseLearningPage from '../components/pages/courseLearning/CourseLearning';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { getCourses, getLearningPaths } from '../store/selectors';

const CourseLearning = ({ courses }) => {
  const {
    query: { courseId },
  } = useRouter();

  const course = courses[courseId];

  return (
    <ErrorBoundary>
      <PageContent>
        <CourseLearningPage course={course} courseId={courseId} />
      </PageContent>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});
export default connect(mapStateToProps)(CourseLearning);
