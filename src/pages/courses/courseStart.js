import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CourseHeader from '../../components/pages/dashboard/courses/courseHeader/CourseHeader';
import CourseOutline from '../../components/pages/dashboard/courses/courseOutline/CourseOutline';
import { resourceActions } from '../../store/actions';

const CourseStart = ({ dispatch, courses }) => {
  const {
    query: { courseId },
  } = useRouter();

  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request(courseId));
  }, [courseId]);

  const course = courses[courseId];

  if (!course) return null;

  let courseTitle = course.title;
  courseTitle = courseTitle && courseTitle.toUpperCase();

  const chapters = course.chapters;

  return (
    <ErrorBoundary>
      <>
        <CourseHeader title={courseTitle} course={course} courseId={courseId} />

        <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
          <CourseOutline chapters={chapters} courseId={courseId} />
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

export default connect(mapStateToProps)(CourseStart);
