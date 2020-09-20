import React from 'react';
import Styled from './Courses.styles';
import { useTranslation } from 'react-i18next';
import ChooseLearningPath from '../../course/chooseLearningPath/ChooseLearningPath';
import CourseFeatures from '../../course/courseFeatures/CourseFeatures';
import PageContent from '../../foundation/PageContent';

const Courses = () => {
  const { t } = useTranslation();

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
