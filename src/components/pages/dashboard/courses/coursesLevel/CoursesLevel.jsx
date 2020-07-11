import React from 'react';
import Level from './Level';
import { connect } from 'react-redux';
import { getCoursesByLevel } from '../../../../../store/selectors';

const CoursesLevel = ({ coursesByLevel, learningPathData }) => {
  const begginerCourses = coursesByLevel && coursesByLevel.beginner;

  const intermediateCourses = coursesByLevel && coursesByLevel.intermediate;

  const advancedCourses = coursesByLevel && coursesByLevel.advanced;

  const begginnerHeading =
    'Part-01 : BEGGINER (' + Object.keys(begginerCourses).length + ' COURSES)';
  const intermediateHeading =
    'Part-02 : INTERMEDIATE (' +
    Object.keys(intermediateCourses).length +
    ' COURSES)';
  const advancedHeading =
    'Part-03 : ADVANCED (' + Object.keys(advancedCourses).length + ' COURSES)';

  return (
    <>
      {Object.keys(begginerCourses).length && (
        <Level
          courses={begginerCourses}
          learningPathData={learningPathData}
          heading={begginnerHeading}
        />
      )}
      {Object.keys(intermediateCourses).length && (
        <Level
          courses={intermediateCourses}
          learningPathData={learningPathData}
          heading={intermediateHeading}
        />
      )}
      {Object.keys(advancedCourses).length && (
        <Level
          courses={advancedCourses}
          learningPathData={learningPathData}
          heading={advancedHeading}
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  coursesByLevel: getCoursesByLevel(state),
});

export default connect(mapStateToProps)(CoursesLevel);
