import React from 'react';
import Styled from './Courses.styles';
import { useTranslation } from 'react-i18next';
import ChooseLearningPath from '../dashboard/courses/chooseLearningPath/ChooseLearningPath';
import CourseFeatures from '../dashboard/courses/courseFeatures/CourseFeatures';
import PageContent from '../../foundation/PageContent';

const Courses = () => {
  const { t } = useTranslation();

  return (
    <>
      <CourseFeatures />
      <PageContent>
        <ChooseLearningPath />
      </PageContent>
    </>
  );
};

export default Courses;
