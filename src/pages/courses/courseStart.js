import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { getChaptersByCourseId, getCourses } from '../../store/selectors';
import CourseHeader from '../../components/course/courseHeader/CourseHeader';
import CourseOutline from '../../components/course/courseOutline/CourseOutline';
import { resourceActions } from '../../store/actions';

const CourseStart = ({ dispatch, courses, chaptersByCourse }) => {
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

  const chapters = chaptersByCourse[courseId] || {};

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
  chaptersByCourse: getChaptersByCourseId(state),
});

export default connect(mapStateToProps)(CourseStart);
