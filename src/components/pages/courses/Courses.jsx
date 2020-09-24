import React from 'react';
import PageContent from '../../foundation/PageContent';
import ChooseLearningPath from '../dashboard/courses/chooseLearningPath/ChooseLearningPath';

const Courses = () => {
  return (
    <>
      {/*<CourseFeatures />*/}
      <PageContent>
        <ChooseLearningPath />
      </PageContent>
    </>
  );
};

export default Courses;
